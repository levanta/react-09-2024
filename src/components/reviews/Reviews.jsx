import React from "react";
import Review from "./review/Review";

const Reviews = ({ reviews }) => {
  if (!reviews?.length) return null;

  return (
    <div>
      <h2>Отзывы</h2>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
