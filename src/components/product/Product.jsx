import React from "react";
import useAmount from "./use-amount";

const Product = ({ product }) => {
  const { amount, increment, decrement } = useAmount(0);

  if (!product) return null;

  return (
    <div>
      <div>
        <div>
          <h4>{product.name}</h4>
          <p>{product.ingredients.join(", ")}</p>
          <div>{product.price}</div>
        </div>
        <div>
          <button onClick={decrement}>-</button>
          {amount}
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
