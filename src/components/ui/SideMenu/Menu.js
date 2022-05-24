import React from "react";
import "./Menu.css";
import { BiHome, BiTv, BiMovie } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <h3>
          Tad<span>Movies</span>
        </h3>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/">
            <BiHome /> Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/movies">
            <BiMovie /> Movies
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/shows">
            <BiTv />
            Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
