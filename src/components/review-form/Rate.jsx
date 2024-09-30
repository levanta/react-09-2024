import React from "react";
import Counter from "../counter/Counter";

const Rate = ({ value, onChange }) => {
  const increment = () => value < 5 && onChange(value + 1);

  const decrement = () => value > 1 && onChange(value - 1);

  return <Counter amount={value} increment={increment} decrement={decrement} />;
};

export default Rate;
