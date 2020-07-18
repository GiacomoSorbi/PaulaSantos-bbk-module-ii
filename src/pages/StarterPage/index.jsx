import React, { useState } from "react";
import "../Styles.css";
import ShoppingList from "./ShoppingList";

const StarterPage = () => {
  const [lists] = useState([]);

  return (
    <div>
      <ShoppingList lists={lists} />
    </div>
  );
};

export default StarterPage;
