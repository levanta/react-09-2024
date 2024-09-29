import React from "react";
import Product from "../product/Product";

const Menu = ({ menu }) => {
  if (!menu) return null;

  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Menu;
