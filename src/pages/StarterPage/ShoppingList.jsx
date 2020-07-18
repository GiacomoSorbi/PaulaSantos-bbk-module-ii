import React, { useState } from "react";
import "../Styles.css";

function ShoppingList() {
  const [lists] = useState([
    //an array of objects here
    { item: "4 baking potatoes", id: 1 },
    { item: "3 carrots", id: 2 },
    { item: "200g fine beans", id: 3 },
    { item: "2 cans of tuna", id: 4 },
    { item: "extra virgin olive oil", id: 5 },
    { item: "400g mayonnaise", id: 6 },
    { item: "6 boiled eggs", id: 7 },
    { item: "a handful of olives and cherry tomatoes", id: 8 },
  ]);

  let onClick = (event) => {
    return {
      textDecoration: event.target.checked ? "line-through" : "none",
    };
  };

  return (
    <div className="container">
      <div className="hero-starter">
        <h1>Olivier salad</h1>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {lists.map((list) => (
            //we return the props above
            <div key={list.id}>
              <p>
                <input onClick={onClick} type="checkbox" />
                {list.item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="method">
        <h2>Method</h2>
        <div className="method-list">
          <ol>
            <li>
              Peel the potatoes and carrots and cut them into small cubes.
            </li>
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
  );
}

export default ShoppingList;
