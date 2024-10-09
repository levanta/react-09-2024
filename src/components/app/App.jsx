import React from "react";
import Layout from "./Layout";
import Restaurants from "../restaurants/Restaurants";
import { restaurants } from "../../../materials/mock.js";
import "../../app.css";

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};

export default App;
