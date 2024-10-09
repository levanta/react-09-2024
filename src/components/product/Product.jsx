import React from "react";
import Counter from "../counter/Counter";
import useAmount from "../../hooks/use-amount";
import {useUser} from "../../contexts/user-context/use-user.jsx";

const Product = ({ product }) => {
  const { amount, increment, decrement } = useAmount(0);
  const {user} = useUser();

  if (!product) return null;

  return (
    <div>
      <div>
        <div>
          <h4>{product.name}</h4>
          <p>{product.ingredients.join(", ")}</p>
          <div>{product.price}</div>
        </div>
        {user && <Counter amount={amount} increment={increment} decrement={decrement} />}
      </div>
    </div>
  );
};

export default Product;
