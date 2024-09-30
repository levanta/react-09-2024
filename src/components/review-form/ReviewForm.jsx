import React, { useEffect } from "react";
import useAmount from "../../hooks/use-amount";
import { useForm } from "../../hooks/use-form";
import Rate from "./Rate";

const ReviewForm = () => {
  const { fields, clear } = useForm({ name: "", text: "", rate: 5 });

  return (
    <div>
      <h2>Оставить отзыв</h2>
      <input type="text" {...fields.name} />
      <input type="text" {...fields.text} />
      <Rate {...fields.rate} />
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default ReviewForm;
