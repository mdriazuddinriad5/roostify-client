import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect } from 'react';

import moment from "moment";

const TestimonialDetail = ({ testimonial }) => {
    const { username, rating, comment, timestamp } = testimonial;

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div>
            <div data-aos='slide-right' className="carousel-item">

                <div className="card w-96 bg-white shadow-xl py-8">
                    <div className="card-body">
                        <h2 className="text-center font-semibold ">&quot;{comment}&quot;</h2>

                        <div className="flex justify-center items-center gap-6 mt-4 md:mt-10">
                            <h2>Rating: {rating}</h2>
                            <h2><strong>{username}</strong>-{moment(timestamp).format('MMMM D, YYYY')}</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;