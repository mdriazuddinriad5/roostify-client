import { Helmet } from "react-helmet";


const FAQ = () => {
    return (
        <div>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-6">Frequently Asked Questions</h2>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What are the check-in and check-out times?
                </div>
                <div className="collapse-content">
                    <p>Our standard check-in time is at 3:00 PM, and check-out time is at 12:00 PM.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Do you offer complimentary breakfast?
                </div>
                <div className="collapse-content">
                    <p>Yes, we provide complimentary breakfast for all our guests.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Are pets allowed in the hotel?
                </div>
                <div className="collapse-content">
                    <p>Unfortunately, we do not allow pets in our hotel.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is parking available for guests?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer complimentary parking for our guests.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What amenities are included in the rooms?
                </div>
                <div className="collapse-content">
                    <p>Our rooms include amenities such as air conditioning, free Wi-Fi, and more.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I cancel or modify my reservation?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can cancel or modify your reservation based on our cancellation policy.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Are there conference facilities available?
                </div>
                <div className="collapse-content">
                    <p>Yes, we have conference facilities for business meetings and events.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is room service available?
                </div>
                <div className="collapse-content">
                    <p>Yes, we offer room service for our guests&apos; convenience.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Do you provide airport shuttle service?
                </div>
                <div className="collapse-content">
                    <p>Yes, we provide airport shuttle services for our guests.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What COVID-19 safety measures are in place?
                </div>
                <div className="collapse-content">
                    <p>We have implemented various safety measures to ensure the well-being of our guests during the COVID-19 pandemic.</p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;