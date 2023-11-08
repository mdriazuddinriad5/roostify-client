import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BookingDetails from "./BookingDetails";
import Swal from "sweetalert2";
import moment from "moment";

const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [noFound, setNoFound] = useState('');

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, { credentials: 'include' })
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



    const handleDelete = async (id, date) => {
        const bookingDate = new Date(date);
        const currentDate = new Date();
        const timeDifference = bookingDate - currentDate;
        const hoursDifference = Math.floor(timeDifference / 1000 / 60 / 60);

        if (hoursDifference < 24) {
            Swal.fire({
                title: 'Error',
                text: 'You cannot delete a booking less than 24 hours before the booked date.',
                icon: 'error',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE',
                    });
                    const data = await response.json();

                    if (data.deletedCount > 0) {
                        Swal.fire('Deleted successfully', '', 'success');
                        const remaining = bookings.filter((booking) => booking._id !== id);
                        setBookings(remaining);
                    } else {
                        Swal.fire('Error', 'Failed to delete the booking. Please try again.', 'error');
                    }
                } catch (error) {
                    console.error('Error deleting booking:', error);
                    Swal.fire('Error', 'Failed to delete the booking. Please try again.', 'error');
                }
            }
        });
    };

    const isRoomAvailable = async (roomId, selectedDate) => {
        try {
            const response = await fetch(`http://localhost:5000/bookings?roomId=${roomId}&selectedDate=${selectedDate}`,  { credentials: 'include' });
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

    const handleUpdateDate = async (id, newDate) => {

        const currentDate = moment();
        const selectedDate = moment(newDate);


        if (selectedDate.isBefore(currentDate, 'day')) {
            Swal.fire({
                title: 'Error',
                text: 'You cannot update to a date in the past.',
                icon: 'error',
            });
            return;
        }

        const isAvailable = await isRoomAvailable(id, selectedDate);

        if (!isAvailable) {
            Swal.fire({
                title: 'Error',
                text: 'The room is already booked on this date. Please choose another date.',
                icon: 'error',
            });
            return;
        }


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
