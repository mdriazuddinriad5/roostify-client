import { FaHotel } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

    const links = [
        { name: 'Home', link: '/' },
        { name: 'My Bookings', link: '/bookings' },
    ]

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-md w-full relative">
            <div className="md:px-24 py-4 px-7 md:flex justify-between items-center ">
                <div className="flex text-2xl cursor-pointer items-center gap-2 bg-white">
                    <FaHotel className="w-7 h-7 text-[#ff385c]"></FaHotel>
                    <span className="font-bold text-[#ff385c]">Roostify</span>
                </div>

                {/* Menu item */}
                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ? <FaXmark></FaXmark> : <HiMenu></HiMenu>}
                </div>

                <ul className={`md:flex pl-9 md:pl-0 md:items-center  md:pb-0 pb-12 md:z-auto z-[1] absolute md:static left-0 w-full md:w-auto h-full md:h-auto transition-all bg-white duration-500 ease-in ${isOpen ? 'top-120' : 'top-[-490px]'}`}>
                    {
                        links.map((link, idx) => (
                            <li key={idx} className="font-semibold my-7 md:my-0 md:ml-8">
                                <Link to={link.link}>{link.name}</Link>
                            </li>))
                    }
                    <button className="md:hidden btn btn-outline rounded-3xl text-[#ff385c]">Login</button>
                </ul>

                <button className="hidden md:inline-block btn btn-outline rounded-3xl text-[#ff385c]">Login</button>

            </div>

        </div>
    );
};

export default NavBar;