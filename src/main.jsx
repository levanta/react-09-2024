import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const root = createRoot(document.getElementById("root"));

const Menu = ({ menu }) => (
  <div>
    <h3>Меню</h3>
    <ul>
      {menu.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  </div>
);

const Reviews = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    <ul>
      {reviews.map((el) => (
        <li key={el.id}>
          {el.user}: {el.text}
        </li>
      ))}
    </ul>
  </div>
);

const Restaurant = ({ el }) => (
  <div>
    <h2>{el.name}</h2>
    <Menu menu={el.menu} />
    <Reviews reviews={el.reviews} />
    <hr />
  </div>
);

root.render(restaurants.map((el) => <Restaurant key={el.id} el={el} />));
