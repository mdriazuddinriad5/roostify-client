import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer className="bg-yellow-200 rounded-lg shadow relative z-0 py-3">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <span  className="hover:underline">Roostify™</span>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to={'/'} className="mr-4 hover:underline md:mr-6 ">Home</Link>
                        <Link to={'/about'} className="mr-4 hover:underline md:mr-6 ">About</Link>
                        <Link to={'/faq'} className="mr-4 hover:underline md:mr-6 ">FAQ</Link>
                    </li>
                   
                </ul>
            </div>
        </footer>

    );
};

export default Footer;