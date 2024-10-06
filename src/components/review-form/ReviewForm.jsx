import React from "react";
import { useForm } from "../../hooks/use-form";
import Rate from "./Rate";
import Button from "../button/Button.jsx";
import styles from "./review-form.module.css";

const ReviewForm = () => {
  const { fields, clear } = useForm({ name: "", text: "", rate: 5 });

  return (
    <div>
      <h2>Оставить отзыв</h2>
      <input type="text" {...fields.name} />
      <input type="text" {...fields.text} />
      <Rate {...fields.rate} />
      <Button onClick={clear} green={true} className={styles.button}>
        Clear
      </Button>
    </div>
  );
};

export default ReviewForm;
