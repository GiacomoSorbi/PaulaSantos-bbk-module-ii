import React from "react";
import "../Styles.css";

const HomePage = () => (
  <div className="container">
    <div className="hero-home">
      <h1>Home cooking for friends</h1>
    </div>

    <div className="container-1">
      <a className="link" href="/starter">
        <h2>Olivier salad</h2>
      </a>
    </div>

    <div className="container-2">
      <a className="link" href="/main">
        <h2>Meatballs in tomato sauce</h2>
      </a>
    </div>
    <div className="container-3">
      <a className="link" href="/dessert">
        <h2>Walnut and chocolate cake</h2>
      </a>
    </div>
    <div className="container-4">
      <a className="link" href="/pies">
        <h2>Tuna pie</h2>
      </a>
    </div>
  </div>
);

export default HomePage;
