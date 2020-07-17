import React from "react";
import "../Styles.css";

const DessertPage = () => (
  <div className="container">
    <div className="hero-dessert">
      <h1>Walnut and chocolate cake</h1>
    </div>
    <div className="ingredients">
      <h2>Ingredients</h2>
      <div className="ingredients-list">
        <p>(8 people)</p>
        <p>
          200g walnuts
          <br />
          150g caster sugar
          <br />
          25g cocoa
          <br />
          250g mascarpone
          <br />
          4 medium eggs
          <br />
          200g dark chocolate
          <br />
          100g white chocolate
          <br />
        </p>
      </div>
    </div>
    <div className="method">
      <h2>Method</h2>
      <div className="method-list">
        <ol>
          <li>Line an 18cm round cake tin with baking paper. </li>
          <li> Heat the oven to 160C.</li>
          <li>
            Grind the dry ingredients (walnuts, sugar and cocoa) until fine.
          </li>
          <li>Mix the dry ingredients with the mascarpone and eggs.</li>
          <li>
            Melt the chocolate and mix it well with the rest of the ingredients
            and spoon it all into the cake tin.
          </li>
          <li> Bake for about 75-90 minutes.</li>
          <li>Remove from the oven and let it cool before serving. </li>
          <li> Serve with ice cream.</li>
        </ol>
      </div>
    </div>
  </div>
);

export default DessertPage;
