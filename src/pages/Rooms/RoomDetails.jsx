import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { GrDriveCage } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import Review from "./Review";
import { Helmet } from "react-helmet";


const RoomDetails = () => {
    const { _id, roomNumber, roomDescription, pricePerNight, roomSize, availability, roomImages, specialOffers, date } = useLoaderData();

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [bookingDate, setBookingDate] = useState('');



    const isRoomAvailable = async (roomId, selectedDate) => {
        try {
            const response = await fetch(`https://roostify-server.vercel.app/booking?roomId=${roomId}&selectedDate=${selectedDate}`);
            const data = await response.json();

            if (Array.isArray(data)) {
                const matchingBookings = data.filter((booking) => {
                    const bookingDate = moment(booking.date);
                    return booking.room_id === roomId && bookingDate.isSame(selectedDate, 'day');
                });
                if (matchingBookings.length > 0) {
                    return false;
                } else {
                    return true;
                }
            }

            return false;
        } catch (error) {
            console.error('Error checking room availability:', error);
            return false;
        }
    };


    const handleBookNow = async () => {

        const selectedDate = new Date(bookingDate);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            Swal.fire({
                title: 'Error',
                text: 'Selected date must be in the present or future.',
                icon: 'error',
            });
            return;
        }

        const isAvailable = await isRoomAvailable(_id, selectedDate);

        if (!isAvailable) {
            Swal.fire({
                title: 'Error',
                text: 'Already booked.',
                icon: 'error',
            });
            return;
        }

        const date = bookingDate;
        const email = user?.email;
        const name = user?.displayName;
        const img = roomImages[0];
        const booking = {
            email,
            name,
            img,
            date,
            price: pricePerNight,
            roomNumber,
            room_id: _id
        }


        if (user) {

            if (!bookingDate) {
                Swal.fire({
                    title: 'Error',
                    text: 'Please select a booking date.',
                    icon: 'error',
                });
                return;
            }



            Swal.fire({
                title: 'Confirm Booking',
                html: `Booking Date: ${bookingDate}<br>Price Per Night: $${pricePerNight}<br>Room Description: ${roomDescription}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch('https://roostify-server.vercel.app/bookings', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(booking)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                Swal.fire('Booking Confirmed!', '', 'success');
                            }
                        })
                }
            });

        } else {
            navigate('/login', { state: location.pathname });
        }
    };


    const [reviewData, setReviewData] = useState({
        username: '',
        rating: '',
        comment: '',
    });

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReviewData({
            ...reviewData,
            [name]: value,
        });
    };




    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            Swal.fire({
                title: 'Failed',
                text: 'You need to sign in to review',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const reviewWithRoomId = { ...reviewData, roomId: _id };

        fetch(`https://roostify-server.vercel.app/reviews/${_id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewWithRoomId),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Great',
                        text: 'Thanks for your feedback',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    setReviewData({
                        username: '',
                        rating: '',
                        comment: ''
                    });
                }
            });
    };

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://roostify-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);



    return (
        <div>

            <Helmet>
                <title>Room | Details</title>
            </Helmet>

            <Marquee>
                {
                    roomImages.map((img, idx) => <img key={idx} className="h-96 w-[50vh]" src={img} alt="" />)
                }

            </Marquee>



            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-3/4 mx-auto mb-5">
                <div className="md:col-span-2">
                    <div>

                        <h1 className="text-2xl text-gray-800 font-bold my-3 text-center">Room Details</h1>

                        <div className="space-y-4 mb-4 border-y-2 py-4">
                            <div className="flex items-center gap-4">
                                <CiBookmarkCheck className="h-8 w-8"></CiBookmarkCheck>
                                <div>
                                    <p className="font-bold">Self check-in</p>
                                    <p className="text-gray-700">Check yourself in with the lockbox.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <GrDriveCage className="h-8 w-8"></GrDriveCage>
                                <div>
                                    <p className="font-bold">Dive right in</p>
                                    <p className="text-gray-700">This is one of the few places in the area with a pool.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <AiOutlineStar className="h-8 w-8"></AiOutlineStar>
                                <div>
                                    <p className="font-bold">Experienced host</p>
                                    <p className="text-gray-700">Violet has 87 reviews for other places.</p>
                                </div>
                            </div>

                        </div>

                        <h2 className="text-justify border-b-2 pb-4">{roomDescription}</h2>

                        <div className="mt-4 border-b-2 pb-4">
                            <p>Room Size: {roomSize} sq.ft</p>
                            <p>Special Offers: {specialOffers}</p>
                            <p>Date: {date}</p>
                            <p>Review Count: {reviews.length}</p>
                            <p>Availability: {availability}</p>
                            <p>Price per night: {pricePerNight}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-2">
                            {reviews.map((rev, idx) => <Review key={idx} rev={rev}></Review>)}
                        </div>

                    </div>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">

                        <div className="card-body">
                            <h2 className="card-title">${pricePerNight}night</h2>
                            <input
                                type="date"
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                            />
                            <div className="card-actions justify-start">
                                <button onClick={handleBookNow} className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl text-gray-800 font-bold my-3 text-center">Leave a Review</h2>
                        <form onSubmit={handleReviewSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block font-semibold text-gray-700">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={reviewData.username}
                                    onChange={handleReviewChange}
                                    required
                                    className="border rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rating" className="block font-semibold text-gray-700">Rating (1-5):</label>
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    value={reviewData.rating}
                                    onChange={handleReviewChange}
                                    required
                                    className="border rounded-md p-2 w-full"
                                />
                            </div> <div className="mb-4">
                                <label htmlFor="comment" className="block font-semibold text-gray-700">Comment:</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={reviewData.comment}
                                    onChange={handleReviewChange}
                                    required
                                    className="border rounded-md p-2 w-full"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Review</button>
                        </form>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default RoomDetails;