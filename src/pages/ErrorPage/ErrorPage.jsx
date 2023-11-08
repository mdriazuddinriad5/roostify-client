import { useNavigate } from "react-router-dom";
import error from "../../assets/dribbble-3_still_2x.gif";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div className="h-screen ">
            <div className="flex justify-center">
                <img src={error} alt="" />
            </div>
            <div className="flex justify-center">
                <button className="btn" onClick={handleHome}>Back home</button>
            </div>
        </div>
    );
};

export default ErrorPage;