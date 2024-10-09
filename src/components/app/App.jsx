import React from "react";
import Layout from "./Layout";
import Restaurants from "../restaurants/Restaurants";
import { restaurants } from "../../../materials/mock.js";
import UserProvider from "../../contexts/user-context/user-context";
import ThemeProvider from "../../contexts/theme-context/theme-context.jsx";
import "../../app.css";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
