import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        axios.get('https://roostify-server.vercel.app/rooms')
            .then(res => {
                setRooms(res.data)
            })

    }, [])
    return (
        <div data-aos='flip-right' className="carousel w-full my-4 relative">
            {rooms.slice(0, 4).map((room, index) => (
                <div key={index} className={`carousel-item relative w-full ${index === 0 ? 'current' : ''}`}>
                    <img src={room.roomImages[2]} className="w-full h-[60vh]" alt={`Room ${index + 1}`} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index === 0 ? 4 : index}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${index === 3 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                    </div>
                    <Link to={`/roomDetails/${room._id}`} className="absolute bottom-10 right-10 bg-orange-500 text-white btn rounded-md hover:bg-primary-dark transition duration-300">Book Now</Link>
                </div>
            ))}
        </div>
    );
};

export default Banner;