import React from "react";
import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";

const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!restaurant) return null;

  return (
    <div>
      <h2>Меню</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Restaurant;
