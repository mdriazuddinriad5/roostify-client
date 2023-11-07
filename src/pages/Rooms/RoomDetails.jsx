import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { GrDriveCage } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import Swal from "sweetalert2";


const RoomDetails = () => {
    const { _id, roomDescription, pricePerNight, roomSize, availability, roomImages, specialOffers, date, review } = useLoaderData();


    const [bookingDate, setBookingDate] = useState('');
    const [bookedDates, setBookedDates] = useState([]);

    const handleBookNow = () => {

        if (!bookingDate) {
            // Show an error SweetAlert if the date is not selected
            Swal.fire({
              title: 'Error',
              text: 'Please select a booking date.',
              icon: 'error',
            });
            return;
          }


          if (bookedDates.includes(bookingDate)) {
            // Show an error SweetAlert if the date is already booked
            Swal.fire({
              title: 'Error',
              text: 'This date is already booked. Please choose another date.',
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
                // Implement your booking logic here
                // For now, we'll just close the modal

                setBookedDates([...bookedDates, bookingDate]);
                
                Swal.fire('Booking Confirmed!', '', 'success');
            }
        });
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