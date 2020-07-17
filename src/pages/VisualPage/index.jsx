import React from "react";
import "../Styles.css";

const VisualPage = () => (
  <div className="container">
    <div className="content">
      <h1 className="title">Visual design</h1>
      <h2>Animated GIF - Ice cream</h2>
      <p>[description]</p>
      <h2>Image 1 - Homepage hero</h2>
      <h3>Original</h3>
      <img src={require("../assets/home-original.jpg")} alt="Homemade bread" />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img src={require("../assets/home.jpg")} alt="Homemade bread" />
      <p>[description]</p>
      <h2>Image 2 - Starter</h2>

      <h3>Original</h3>
      <img
        src={require("../assets/starter-original.jpg")}
        alt="Olivier salad"
      />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img src={require("../assets/starter.jpg")} alt="Olivier salad" />
      <p>[description]</p>
      <h2>Image 3 - Main course</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/main-original.jpg")}
        alt="Meatballs in tomato sauce"
      />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img
        src={require("../assets/main.jpg")}
        alt="Meatballs in tomato sauce"
      />
      <p>[description]</p>
      <h2>Image 4 - Dessert</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/dessert-original.jpg")}
        alt="Walnut and chocolate cake"
      />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img
        src={require("../assets/dessert.jpg")}
        alt="Walnut and chocolate cake"
      />
      <p>[description]</p>
      <h2>Image 5 - Ice cream</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/icecream-original.jpg")}
        alt="Mango ice cream"
      />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img src={require("../assets/icecream-home.jpg")} alt="Mango ice cream" />
      <p>[description]</p>
      <h2>Image 6 - Kitchen vector illustration (used as site's favicon)</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/kitchen-vector-original.jpg")}
        alt="Kitchen vector illustration"
      />
      <p>[description]</p>
      <h3>Edited version</h3>
      <img
        src={require("../assets/kitchen-vector.png")}
        alt="Kitchen vector illustration"
      />
      <p>[description]</p>
    </div>
  </div>
);

export default VisualPage;
