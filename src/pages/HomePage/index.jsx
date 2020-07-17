import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles.css";

const HomePage = () => (
  <div className="container">
    <div className="hero-home">
      <h1>Home cooking for friends</h1>
    </div>

    <div className="container-1">
      <h2>
        <NavLink to="/starter">Olivier salad</NavLink>
      </h2>
    </div>

    <div className="container-2">
      <h2>
        <NavLink to="/main">Meatballs in tomato sauce</NavLink>
      </h2>
    </div>
    <div className="container-3">
      <h2>
        <NavLink to="/dessert">Walnut and chocolate cake</NavLink>
      </h2>
    </div>
    <div className="container-4">
      <h2>
        <NavLink to="/pies">Tune pie</NavLink>
      </h2>
    </div>
  </div>
);

export default HomePage;
