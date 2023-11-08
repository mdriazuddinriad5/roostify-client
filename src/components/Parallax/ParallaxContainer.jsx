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

    ]




    return (
        <div>

            <h2 className='text-center font-bold text-gray-900 my-4 mb-6 text-3xl'>Stunning Imagery</h2>

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
