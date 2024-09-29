import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";
import App from "./components/app/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// const Menu = ({ menu }) => (
//   <div>
//     <h3>Меню</h3>
//     <ul>
//       {menu.map((menuItem) => (
//         <li key={menuItem.id}>{menuItem.name}</li>
//       ))}
//     </ul>
//   </div>
// );
//
// const Reviews = ({ reviews }) => (
//   <div>
//     <h3>Отзывы</h3>
//     <ul>
//       {reviews.map((review) => (
//         <li key={review.id}>
//           {review.user}: {review.text}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
//
// const Restaurant = ({ restaurant }) => (
//   <div>
//     <h2>{restaurant.name}</h2>
//     <Menu menu={restaurant.menu} />
//     <Reviews reviews={restaurant.reviews} />
//     <hr />
//   </div>
// );
//
// root.render(
//   restaurants.map((restaurant) => (
//     <Restaurant key={restaurant.id} restaurant={restaurant} />
//   )),
// );
