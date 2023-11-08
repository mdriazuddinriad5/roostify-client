import { useState } from "react";
import Swal from "sweetalert2";


const BookingDetails = ({ booking, handleDelete, handleUpdateDate }) => {

    const { _id, img, date, price, roomNumber } = booking;

    const [newDate, setNewDate] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleDateUpdate = () => {

        if (newDate) {

            handleUpdateDate(_id, newDate);
            setIsEditing(false);
        } else {
            Swal.fire({
                title: "Error",
                text: "Please enter a valid date.",
                icon: "error",
            });
        }
    };

    return (
        <div>
            <div className="flex items-center rounded-lg">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={img}
                            alt="image"
                            className="h-60 w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold  leading-relaxed tracking-normal text-red-400 antialiased">
                            Booking Room: {roomNumber}
                        </h6>
                        <h6 className="mb-4 block font-sans text-base font-semibold  leading-relaxed tracking-normal text-red-400 antialiased">
                            Booking date: {date}
                        </h6>

                        <h4 className="mb-2 block font-sans md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Price: {price}
                        </h4>


                        <div className="absolute bottom-0">
                            {isEditing ? (
                                <div>
                                    <input
                                        type="date"
                                        value={newDate}
                                        onChange={(e) => setNewDate(e.target.value)}
                                    />
                                    <button onClick={handleDateUpdate} className="btn">
                                        Update
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="btn"
                                >
                                    Update Booking Date
                                </button>
                            )}

                        </div>

                        <button onClick={() => handleDelete(_id, date)} className="btn absolute right-0 md:bottom-0 top-28 md:top-0">Delete</button>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default BookingDetails;