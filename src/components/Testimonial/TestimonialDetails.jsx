// import 'aos/dist/aos.css'
// import Aos from 'aos';
// import { useEffect } from 'react';

const TestimonialDetail = ({ testimonial }) => {
    const { review, image, author } = testimonial;

    // useEffect(()=>{
    //     Aos.init({duration:3000});
    // },[])

    return (
        <div>
            <div /* data-aos='flip-right' */ className="carousel-item">

                <div className="card w-96 bg-white shadow-xl py-8">
                    <div className="card-body">
                        <h2 className="text-center font-semibold ">&quot;{review}&quot;</h2>

                        <div className="flex justify-center items-center gap-6 mt-4 md:mt-10">
                            <img className="rounded-full w-12 h-12" src={image} alt="" />
                            <h2 className="text-base font-serif font-medium">{author}</h2>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;