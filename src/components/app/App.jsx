import React from "react";
import Layout from "./Layout";
import Restaurants from "../restaurants/Restaurants";
import { restaurants } from "../../../materials/mock.js";

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};

export default App;
