import React from "react";
import "../Styles.css";

const MainPage = () => (
  <div className="container">
    <div className="hero-main">
      <h1>Meatballs in tomato sauce</h1>
    </div>
    <div className="ingredients">
      <h2>Ingredients</h2>
      <div className="ingredients-list">
        <p>(serves 8)</p>
        <p>
          500g mince beef
          <br />
          500g mince lamb
          <br />
          two eggs
          <br />
          135g breadcrumbs
          <br />
          2 or 3 cans of chopped tomatoes
          <br />
          1 glass of white wine
          <br />
          one medium onion
          <br />
          2 garlic cloves
          <br />
          extra virgin olive oil
          <br />
          flat-leaf parsley
          <br />
        </p>
      </div>
    </div>
    <div className="method">
      <h2>Method</h2>
      <div className="method-list">
        <ol>
          <li>
            With clean hands, mix well the mince beef, lamb, breadcrumbs and
            whisked eggs in a large bowl and shape them into balls.
          </li>
          <li>
            Heat a little extra virgin olive oil in a casserole dish and brown
            the meatballs in batches. Set them aside.
          </li>
          <li>
            Fry the chopped onion and garlic in the remaining oil until soft.
          </li>
          <li>Add the meatballs, cover with the white wine and let it boil.</li>
          <li>Add the chopped tomatoes. </li>
          <li>Simmer for 20 minutes.</li>
          <li>Add flat-leaf parsley.</li>
          <li>Serve with basmati rice.</li>
        </ol>
      </div>
    </div>
  </div>
);

export default MainPage;
