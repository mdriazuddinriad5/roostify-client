const Room = ({ room }) => {
    const { _id, roomNumber, roomDescription, pricePerNight, roomSize, availability, roomImages, specialOffers, date, review } = room;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-56" src={roomImages[0]} alt="Shoes" /></figure>
                <div className="p-4 flex justify-between">
                    <p className="text-orange-500"><span className="text-cyan-500">Room Number: </span>{roomNumber}</p>
                    <div className="text-orange-500">Price per night: ${pricePerNight}</div>
                </div>
            </div>


        </div>
    );
};

export default Room;