//import React, { useState } from "react";
import React from "react";
import "../Styles.css";

const StarterPage = () => (
  /*function StarterPage() {
  const ingredientsList = [
    { id: 1, item: "4 baking potatoes" },
    { id: 2, item: "3 carrots" },
    { id: 3, item: "200g fine beans" },
    { id: 4, item: "2 cans of tuna" },
    { id: 5, item: "extra virgin olive oil" },
    { id: 6, item: "400g mayonnaise" },
    { id: 7, item: "6 boiled eggs" },
    { id: 8, item: "a handful of olives and cherry tomatoes" },
  ];

  let [markComplete, setMarkComplete] = useState();
  let onClick = () => {
    return {
      textDecoration: setMarkComplete ? "line-through" : "none",
    };
  };

  return (*/
  <div className="container">
    <div className="hero-starter">
      <h1>Olivier salad</h1>
    </div>
    <div className="ingredients">
      <h2>Ingredients</h2>
      <div className="ingredients-list">
        <p>
          (serves 8)
          <br />
          4 baking potatoes
          <br />3 carrots
          <br />
          200g fine beans
          <br />
          2 cans of tuna
          <br />
          extra virgin olive oil
          <br />
          400g mayonnaise
          <br />
          6 boiled eggs
          <br />a handful of olives and cherry tomatoes
        </p>
      </div>
    </div>
    <div className="method">
      <h2>Method</h2>
      <div className="method-list">
        <ol>
          <li>Peel the potatoes and carrots and cut them into small cubes.</li>
          <li>Cut the fine beans in approximately 2cm length.</li>
          <li>
            Boil the potatoes, carrots and fine beans together until tender,
            drain them, and let them cool in a deep serving plate.
          </li>
          <li>Mix the vegetables with the tuna and 4 chopped boiled eggs.</li>
          <li>
            Add 6 tablespoons of mayonnaise and a good splash of extra virgin
            olive oil to the vegetables, tuna and eggs and mix well.
          </li>
          <li>
            Cover with some mayonnaise and decorate by grating two boiled eggs
            over it.
          </li>
          <li>Add halved olives and cherry tomatoes to decorate.</li>
          <li>Keep it covered in the fridge until guests arrive.</li>
        </ol>
      </div>
    </div>
  </div>
  //);
  //}
);

export default StarterPage;
