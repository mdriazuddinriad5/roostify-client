

const Review = ({ rev }) => {
    const { username, rating, comment } = rev;
    return (
        <div className="shadow-md">
            <h2>{username}</h2>
            <p>{rating}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Review;