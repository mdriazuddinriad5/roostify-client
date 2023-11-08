import { Map, Marker } from 'pigeon-maps';

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const MyMap = () => {

    const locations = [
        { name: "Roostify Hotel", coordinates: [-37.8176, 144.9695] },
        { name: "Royal Botanic Gardens", coordinates: [-37.8304, 144.9796] },
        { name: "Eureka Skydeck", coordinates: [-37.8214, 144.9647] },
        { name: "Melbourne Zoo", coordinates: [-37.7741, 144.9492] },
        { name: "St. Paul's Cathedral", coordinates: [-37.8152, 144.9665] },
        { name: "Queen Victoria Market", coordinates: [-37.8070, 144.9567] },
        { name: "National Gallery of Victoria", coordinates: [-37.8226, 144.9689] },
        { name: "Melbourne Museum", coordinates: [-37.8030, 144.9710] },
    ];

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])

    return (
        <div data-aos='fade-up' id="map-loaded" className='my-5'>
            <h2 className="text-2xl text-center mb-2 font-semibold">Maps</h2>
            <div className='h-[60vh] w-full'>
                <Map height={'60vh'} defaultCenter={[-37.84, 144.94]} defaultZoom={11}>
                    {
                        locations.map((location, index) => (
                            <Marker
                                key={index}
                                width={50}
                                anchor={location.coordinates}>

                            </Marker>
                        ))
                    }

                </Map>
            </div>
        </div>
    );
};


export default MyMap;