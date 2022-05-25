import React from "react";
import Menu from "../SideMenu/Menu";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
