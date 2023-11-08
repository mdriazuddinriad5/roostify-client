import { FaHotel } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './NavBar.css'
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut().then().catch()
    }

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
            <div className=" py-4 px-7 md:flex justify-between items-center ">
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
                            <li key={idx} className="font-medium text-gray-500 my-7 md:my-0 md:ml-3 lg:ml-8">
                                <NavLink onClick={() => setIsOpen(false)} to={link.link} className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#008080] underline" : ""
                                }>{link.name}</NavLink>
                            </li>))
                    }

                    <div className="md:hidden">
                        {

                            user ? <>

                                <a onClick={handleLogOut} href=""><button className=" bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Sign Out</button></a>
                                <div className="absolute flex items-center right-2 top-7">
                                    <p className="mr-2 text-blue-400 font-bold ">{user.displayName}</p>
                                    <img className="w-8 rounded-full mr-2" src={user.photoURL} />
                                </div>
                            </> :

                                <Link to={'/login'}><button className=" bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Login</button></Link>


                        }

                    </div>


                </ul>

                <div className="hidden md:inline-flex md:items-center">
                    {

                        user ? <>

                            <p className="mr-2 text-blue-400 font-bold ">{user.displayName}</p>
                            <img className="w-8 rounded-full mr-2" src={user.photoURL} />

                            <a onClick={handleLogOut} href=""><button className=" bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Sign Out</button></a>
                        </> :

                            <Link to={'/login'}><button className=" bg-[#ff385c] hover:bg-[#ff274e] text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">Login</button></Link>


                    }

                </div>


            </div>

        </div>
    );
};

export default NavBar;