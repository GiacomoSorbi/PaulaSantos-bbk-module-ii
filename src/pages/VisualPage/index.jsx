import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles.css";

const VisualPage = () => (
  <div className="container">
    <div className="content">
      <h1 className="title">Visual design</h1>
      <h2>Animated GIF - Ice cream</h2>
      <p>
        The GIF below was produced by importing an MP4 into Photoshop and
        converting video frames to layers. A frame animation was created in the
        Timeline, and of the 200+ layers only 30 were selected. Of those 30 the
        last 15 were reversed to make the GIF less repetitive and more dynamic.
        The GIF was exported for the web and optimised so that it didn't lose
        quality when published.
      </p>
      <p>The GIF can be used in a social media campaign as follows:</p>
      <ul>
        <li>Channel: Twitter</li>
        <li>
          Message: Make ice cream and other delicious home-made recipies for a
          meal with friends. More details at{" "}
          <span role="img" aria-label="Pointing down">
            👇
          </span>
          <br />
          <NavLink to="/" exact>
            github.com
          </NavLink>
        </li>
      </ul>
      <img
        style={{ width: "auto", height: "400px" }}
        src={require("../assets/icecream.gif")}
        alt="Ice cream GIF"
      />

      <h2>Image 1 - Homepage hero</h2>
      <h3>Original</h3>
      <img src={require("../assets/home-original.jpg")} alt="Homemade bread" />

      <h3>Edited version</h3>
      <p>
        The original layer in the image below was duplicated in Photoshop, and
        the copy in the foreground was made smaller, for the back layer to act
        as a frame. The levels were adjusted in the background layer so that it
        was darker, intensifying the frame effect. The color balance was
        adjusted in the foreground layer to intensify the colours. The image was
        exported for the web as a progressive high quality JPG.
      </p>
      <img src={require("../assets/home.jpg")} alt="Homemade bread" />

      <h2>Image 2 - Starter</h2>

      <h3>Original</h3>
      <img
        src={require("../assets/starter-original.jpg")}
        alt="Olivier salad"
      />

      <h3>Edited version</h3>
      <p>
        The original layer in the image below was duplicated in Photoshop, and
        the copy in the foreground was made smaller, for the back layer to act
        as a frame. The levels were adjusted in the background layer so that it
        was darker, intensifying the frame effect. The vibrance and color
        balance were adjusted in the foreground layer to intensify the colours.
        The image was exported for the web as a progressive very high quality
        JPG.
      </p>
      <img src={require("../assets/starter.jpg")} alt="Olivier salad" />

      <h2>Image 3 - Main course</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/main-original.jpg")}
        alt="Meatballs in tomato sauce"
      />

      <h3>Edited version</h3>
      <p>
        The original layer in the image below was duplicated in Photoshop, and
        the copy in the foreground was made smaller, for the back layer to act
        as a frame. The levels were adjusted in the background layer so that it
        was darker, intensifying the frame effect. The foreground image was
        slightly over-exposed and the vibrance was adjusted to intensify the
        colours, particularly the reds and the yellows. The image was exported
        for the web as a progressive high quality JPG.
      </p>
      <img
        src={require("../assets/main.jpg")}
        alt="Meatballs in tomato sauce"
      />

      <h2>Image 4 - Dessert</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/dessert-original.jpg")}
        alt="Walnut and chocolate cake"
      />

      <h3>Edited version</h3>
      <p>
        The original layer in the image below was duplicated in Photoshop, and
        the copy in the foreground was made smaller, for the back layer to act
        as a frame. The brightness and contrast were adjusted on the foreground
        image to make it brighter. The foreground image also had the vibrance
        and color balance adjusted to intensify the colours of the raspberries
        and the cake. The image was exported for the web as a progressive high
        quality JPG.
      </p>
      <img
        src={require("../assets/dessert.jpg")}
        alt="Walnut and chocolate cake"
      />

      <h2>Image 5 - Ice cream</h2>
      <h3>Original</h3>
      <img
        src={require("../assets/icecream-original.jpg")}
        alt="Mango ice cream"
      />

      <h3>Edited version</h3>
      <p>
        The original layer in the image below was duplicated in Photoshop, and
        the copy in the foreground was made smaller, for the back layer to act
        as a frame. The levels were slightly adjusted in the background layer so
        that it was darker, intensifying the frame effect. The curves, vibrance
        and saturation were adjusted in the foreground image to intensify the
        colours, particularly the mango and the milk and dark chocolate flakes.
        The image was exported for the web as a progressive high quality JPG.
      </p>
      <img
        src={require("../assets/icecream-visual.jpg")}
        alt="Mango ice cream"
      />

      <h2>Image 6 - Kitchen vector illustration (used as site's favicon)</h2>
      <h3>Original</h3>
      <img
        style={{ width: "60%", height: "auto" }}
        src={require("../assets/kitchen-vector-original.png")}
        alt="Kitchen vector illustration"
      />

      <h3>Edited version</h3>
      <p>
        The orginal vector image was edited as an Illustrator file designed by
        <a href="http://www.freepik.com">Freepik</a> that was exported for the
        web as a PNG-24. The saucepan vector was isolated in the orginal
        Illustrator file, rotated and the colour modified. It was then exported
        for the web as a PNG-24 which was then converted as the site's favicon.
      </p>
      <img
        style={{ width: "60%", height: "auto" }}
        src={require("../assets/kitchen-vector.png")}
        alt="Kitchen vector illustration"
      />
    </div>
  </div>
);

export default VisualPage;
