import { FaMap } from "react-icons/fa";
import { Link } from "react-scroll";

const FloatingMap = () => {
    return (

        <Link to="map-loaded" smooth={true} duration={500} spy={true} offset={-50}>
            <button className="fixed z-1 bottom-10 left-1/2 transform -translate-x-1/2 btn bg-slate-900 text-white">
                Show map <span><FaMap></FaMap></span>
            </button>
        </Link>
    );
};

export default FloatingMap;