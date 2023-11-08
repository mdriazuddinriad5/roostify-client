import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BookingDetails from "./BookingDetails";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [noFound, setNoFound] = useState('');

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setBookings(data);
                } else {
                    setNoFound('No Data Found');
                }
            })
    }, [url]);



    const calculateTotalPrice = (bookedRooms) => {
        return bookedRooms.reduce((prevVal, currentVal) => prevVal + currentVal.price, 0);
    };


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted successfully', '', 'success');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })


            }
        })



    }

    const handleUpdateDate = (id, newDate) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ date: newDate }), 
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Update state to reflect the date change
                    setBookings((prevBookings) => {
                        return prevBookings.map((booking) => {
                            if (booking._id === id) {
                                return { ...booking, date: newDate };
                            }
                            return booking;
                        });
                    });

                    Swal.fire({
                        title: 'Success',
                        text: 'Booking date updated successfully!',
                        icon: 'success',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to update booking date. Please try again.',
                        icon: 'error',
                    });
                }
            })
    };


    return (
        <div>
            {bookings.length > 0 && (
                <p className="text-center my-6">Total Price: {calculateTotalPrice(bookings)}</p>
            )}
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-5/6 mx-auto py-8 lg:py-12">
                        {
                            bookings.map(booking => <BookingDetails
                                key={booking._id}
                                handleDelete={handleDelete}
                                booking={booking}
                                handleUpdateDate={handleUpdateDate}
                            ></BookingDetails>)
                        }
                    </div>
                </div>
            )}
        </div>
    );
};
export default Bookings;
