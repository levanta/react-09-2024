import React from "react";
import Header from "./Header";
import ScrollProgress from "./ScrollProgress";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ScrollProgress />
    </div>
  );
};

export default Layout;
