import React from "react";

const Counter = ({ amount, decrement, increment }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
