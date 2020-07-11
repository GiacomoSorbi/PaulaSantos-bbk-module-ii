import React from "react";
import "../Styles.css";

const HomePage = () => (
  <div className="container">
    <div className="hero-home">
      <h1>Home cooking for friends</h1>
    </div>

    <div className="container-1">
      <h2>
        <a className="link" href="/starter">
          Olivier salad
        </a>
      </h2>
    </div>

    <div className="container-2">
      <h2>
        <a className="link" href="/main">
          Meatballs in tomato sauce
        </a>
      </h2>
    </div>
    <div className="container-3">
      <h2>
        <a className="link" href="/dessert">
          Walnut and chocolate cake
        </a>
      </h2>
    </div>
    <div className="container-4">
      <h2>
        <a className="link" href="/pies">
          Tuna pie
        </a>
      </h2>
    </div>
  </div>
);

export default HomePage;
