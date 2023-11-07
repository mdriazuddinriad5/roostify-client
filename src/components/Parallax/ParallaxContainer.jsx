import { Parallax } from 'react-parallax';
import './ParallaxContainer.css'

const ParallaxContainer = () => {
    const images = [
        {
            "url": "https://i.ibb.co/vcNnb0m/14353202695-8b9ed99d61-k.jpg",
            "caption": "Elegance in Every Detail"
        },
        {
            "url": "https://i.ibb.co/jMQnSDC/31273069724-57b7fba89d-o.jpg",
            "caption": "Luxurious Living Space"
        },
        {
            "url": "https://i.ibb.co/XYKg08X/eiliv-aceron-2-Lzq-R50-NTw-unsplash.jpg",
            "caption": "Nature's Serenity"
        },
        {
            "url": "https://i.ibb.co/DWz44G4/fernando-alvarez-rodriguez-M7-Gdd-Pq-Jowg-unsplash.jpg",
            "caption": "Sophistication in Simplicity"
        },
        {
            "url": "https://i.ibb.co/TMjDvJF/mark-champs-Id2-IIl1j-OB0-unsplash.jpg",
            "caption": "Tranquil Escape"
        },
        {
            "url": "https://i.ibb.co/KF813y3/olexandr-ignatov-w72a24br-INI-unsplash.jpg",
            "caption": "Unparalleled Serenity"
        },
        {
            "url": "https://i.ibb.co/vBFmDSH/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg",
            "caption": "Elevated Luxury"
        },
        // {
        //     "url": "https://i.ibb.co/T8hF1yR/point3d-commercial-imaging-ltd-5-BV56-Sdv-Lmo-unsplash.jpg",
        //     "caption": "Modern Amenities"
        // },
        // {
        //     "url": "https://i.ibb.co/sR7YFVt/tony-yakovlenko-l-Dxxe-AJr-Wp-E-unsplash.jpg",
        //     "caption": "Contemporary Elegance"
        // },
        // {
        //     "url": "https://i.ibb.co/xCnMpGs/visualsofdana-T5p-L6ci-En-I-unsplash.jpg",
        //     "caption": "Rustic Charm"
        // },
        // {
        //     "url": "https://i.ibb.co/4SjVnhp/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg",
        //     "caption": "Urban Oasis"
        // }
    ]




    return (
        <div>
            {images.map((img, index) => (

                <Parallax className='image' bgImage={img.url} key={index} strength={800}>
                    <div className='content'>
                        <span className='img-txt'>{img.caption}</span>
                    </div>

                </Parallax>

            ))}

        </div>
    );
};

export default ParallaxContainer;
