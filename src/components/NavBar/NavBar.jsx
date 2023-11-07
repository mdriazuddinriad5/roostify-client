import { FaHotel } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './NavBar.css'

const NavBar = () => {

    const links = [
        { name: 'Home', link: '/' },
        { name: 'Rooms', link: '/rooms' },
        { name: 'My Bookings', link: '/bookings' },
    ]

    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.getElementById('navbar').classList.add('sticky');
            } else {
                document.getElementById('navbar').classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className="shadow w-full relative" id="navbar">
            <div className="md:px-24 py-4 px-7 md:flex justify-between items-center ">
                <div className="flex text-2xl cursor-pointer items-center gap-2 ">
                    <FaHotel className="w-7 h-7 text-[#ff385c]"></FaHotel>
                    <span className="font-bold text-[#ff385c]">Roostify</span>
                </div>

                {/* Menu item */}
                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ? <FaXmark></FaXmark> : <HiMenu></HiMenu>}
                </div>

                <ul className={`md:flex pl-9 md:pl-0 md:items-center  md:pb-0 pb-12 md:z-auto z-[10] absolute md:static left-0 w-full md:w-auto bg-white transition-all duration-500 ease-in ${isOpen ? 'top-120' : 'top-[-490px]'}`}>
                    {
                        links.map((link, idx) => (
                            <li key={idx} className="font-medium text-gray-500 my-7 md:my-0 md:ml-8">
                                <Link to={link.link}>{link.name}</Link>
                            </li>))
                    }
                    <Link to={'/login'}><button className="md:hidden bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Login</button></Link>

                </ul>

                <Link to={'/login'}><button className="hidden md:inline-block bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Login</button></Link>

            </div>

        </div>
    );
};

export default NavBar;