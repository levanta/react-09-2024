import React from "react";
import Button from "../button/Button";
import styles from "./counter.module.css";

const Counter = ({ amount, decrement, increment }) => {
  return (
    <div className={styles.counter}>
      <Button onClick={decrement} small={true}>
        -
      </Button>
      {amount}
      <Button onClick={increment} small={true}>
        +
      </Button>
    </div>
  );
};

export default Counter;
