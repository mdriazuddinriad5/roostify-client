import axios from "axios";
import { useEffect, useState } from "react";


const Banner = () => {

    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
            .then(res => {
                setRooms(res.data)
            })

    }, [])
    return (
        <div className="carousel w-full my-4">
            {rooms.slice(0, 4).map((room, index) => (
                <div key={index} className={`carousel-item relative w-full ${index === 0 ? 'current' : ''}`}>
                    <img src={room.roomImages[1]} className="w-full h-[60vh]" alt={`Room ${index + 1}`} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index === 0 ? 4 : index}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${index === 3 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;