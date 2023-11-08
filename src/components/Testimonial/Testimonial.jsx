import { useEffect, useState } from "react";
import TestimonialDetail from "./TestimonialDetails";

const Testimonial = () => {
    const [testimonials, setTestimonial] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/testimonials')
        .then(res=> res.json())
        .then(data=> setTestimonial(data))
    },[])

    return (
        <div className="my-10 py-14 bg-slate-300 text-center">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <p className="text-xl font-normal mb-6">Our Happy Clients</p>
            <div className="carousel flex flex-row w-3/4 mx-auto p-4 space-x-4 bg-neutral rounded-box">
                {
                    testimonials.map(testimonial=> <TestimonialDetail testimonial={testimonial} key={testimonial._id}></TestimonialDetail>)
                }
            </div>
        </div>
    );
};

export default Testimonial;