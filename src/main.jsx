import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./app.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
