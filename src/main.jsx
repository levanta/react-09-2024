import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";
import App from "./components/app/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
