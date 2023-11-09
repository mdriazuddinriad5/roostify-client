import axios from "axios";
import { useEffect, useState } from "react";
import Room from "./Room";
import { Helmet } from "react-helmet";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [sortBy, setSortBy] = useState([]);

    useEffect(() => {
        axios.get('https://roostify-server.vercel.app/rooms', { withCredentials: true })
            .then(res => {
                setRooms(res.data)
            })

    }, [])


    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const sortedRooms = rooms.slice();

    if (sortBy === 'lowToHigh') {
        sortedRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
    }
    else if (sortBy === 'highToLow') {
        sortedRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }


    return (
        <div>
            <Helmet>
                <title>Rooms</title>
            </Helmet>
            <div className="my-4 flex justify-center">
                <label className="mr-1">Sort By:</label>
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="choose">Choose</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-5/6 mx-auto my-6">
                {
                    sortedRooms.map(room =>
                        <Room
                            key={room._id}
                            room={room}>
                        </Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;