// Import necessary modules/components

import moment from "moment";

const Review = ({ rev }) => {
    const { username, rating, comment, timestamp } = rev;

    return (
        <div className="border p-4 mb-4">
            <p>
                <strong>{username}</strong> - {moment(timestamp).format('MMMM D, YYYY')}
            </p>
            <p>Rating: {rating}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Review;
