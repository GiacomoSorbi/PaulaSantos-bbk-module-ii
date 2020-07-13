import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/`} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/starter`}>Starter</NavLink>
      </li>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/main`}>Main course</NavLink>
      </li>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/dessert`}>Dessert</NavLink>
      </li>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/pies`}>Pies</NavLink>
      </li>
      <li>
        <NavLink to={`process.env.PUBLIC_URL/contact`}>Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
