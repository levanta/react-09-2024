import React from "react";
import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";
import ReviewForm from "../review-form/ReviewForm";

const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!restaurant) return null;

  return (
    <div>
      <h2>Меню</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <ReviewForm />
    </div>
  );
};

export default Restaurant;
