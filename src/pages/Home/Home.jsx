
import Banner from "../../components/Banner/Banner";
import FloatingMap from "../../components/Map/FloatingMap";
import Map from "../../components/Map/Map";
import ParallaxContainer from "../../components/Parallax/ParallaxContainer";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ParallaxContainer></ParallaxContainer>
            <FloatingMap></FloatingMap>
            <Testimonial></Testimonial>
            <Map></Map>
            
        </div>
    );
};

export default Home;