import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { GrDriveCage } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";


const RoomDetails = () => {
    const { _id, roomNumber, roomDescription, pricePerNight, roomSize, availability, roomImages, specialOffers, date, review } = useLoaderData();

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [bookingDate, setBookingDate] = useState('');




    const handleBookNow = () => {

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

                    fetch('http://localhost:5000/bookings', {
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


    return (
        <div>

            <Marquee>
                {
                    roomImages.map((img, idx) => <img key={idx} className="h-96 w-[50vh]" src={img} alt="" />)
                }

            </Marquee>



            <div className="grid grid-cols-3 gap-6 w-3/4 mx-auto mb-5">
                <div className="col-span-2">
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
                            <p>Review {review}</p>
                            <p>Availability: {availability}</p>
                            <p>Price per night: {pricePerNight}</p>
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
                </div>



            </div>
        </div>
    );
};

export default RoomDetails;