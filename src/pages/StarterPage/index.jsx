import React from "react";
import "../Styles.css";

const StarterPage = () => (
  <div className="container">
    <div className="hero-starter">
      <img src={require("../assets/starter.jpg")} alt={"Olivier salad"} />
    </div>
    <div className="h1">
      <h1>Olivier salad</h1>
    </div>
    <div className="ingredients">
      <h2>Ingredients</h2>
      <div className="ingredients-list">
        <p>ingredient one</p>
        <p>ingredient two</p>
        <p>ingredient three</p>
      </div>
    </div>
    <div className="method">
      <h2>Method</h2>
      <div className="method-list">
        <p>step one</p>
        <p>step two</p>
        <p>step three</p>
      </div>
    </div>
  </div>
);

export default StarterPage;
