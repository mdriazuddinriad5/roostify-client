import { Helmet } from "react-helmet-async";


const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="w-5/6 mx-auto p-4 md:px-10 py-10 lg:px-28 lg:py-16 shadow-xl">
                <h2 className="text-3xl font-bold">About Roostify Hotel: Creating Unforgettable Stays</h2>
                <p className="mt-6 text-justify">
                    At Roostify Hotel, we specialize in curating exceptional experiences to make your stay truly memorable. With a commitment to luxury, comfort, and personalized service, we redefine hospitality, ensuring every moment with us is exceptional.
                </p>
                <h2 className="text-xl font-semibold my-6">Our Story</h2>
                <p className="text-justify">
                    Roostify Hotel was founded with a vision to provide a haven of luxury and tranquility for our guests. Our journey began with the belief that a hotel stay should be more than just accommodation—it should be an immersive experience. Over the years, we&apos;ve transformed ordinary stays into extraordinary memories.
                </p>
                <h2 className="text-xl font-semibold my-6">Why Choose Roostify Hotel?</h2>
                <ol className="space-y-2">
                    <li><span className="text-lg font-medium">Luxurious Accommodation:</span> Experience opulence in our thoughtfully designed rooms and suites, ensuring a comfortable and lavish stay.</li>
                    <li><span className="text-lg font-medium">Prime Location:</span> Roostify Hotel is strategically located, providing easy access to key attractions, making your stay convenient and enjoyable.</li>
                    <li><span className="text-lg font-medium">Exemplary Service:</span> Our dedicated staff is committed to delivering impeccable service, anticipating your needs for a seamless experience.</li>
                    <li><span className="text-lg font-medium">Fine Dining:</span> Indulge in a culinary journey with our world-class chefs crafting delectable dishes to satisfy your palate.</li>
                    <li><span className="text-lg font-medium">Elegant Ambiance:</span> Immerse yourself in an ambiance of sophistication and warmth, complemented by stylish decor and attention to detail.</li>
                    <li><span className="text-lg font-medium">Event Spaces:</span> Host memorable events in our versatile and well-equipped event spaces, perfect for weddings, meetings, and celebrations.</li>
                    <li><span className="text-lg font-medium">Positive Reviews:</span> Discover why our guests rave about their Roostify Hotel experience. Read testimonials from delighted guests who have experienced our hospitality.</li>
                </ol>

                <p className="mt-10 text-justify">
                    Roostify Hotel is not just a place to stay; it&apos;s a destination where luxury meets personalized service. We invite you to Roostify Hotel, where we create unforgettable stays, one guest at a time. Your journey to luxury begins here.
                </p>

                <h2 className="mt-12"><span className="text-lg font-medium">Contact Us:</span> +10251428109</h2>
                <h2 className="mt-2"><span className="text-lg font-medium">Email:</span> info@roostifyhotel.com</h2>
            </div>
        </div>
    );
};

export default AboutUs;
