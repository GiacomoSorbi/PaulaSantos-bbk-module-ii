import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  HomePage,
  StarterPage,
  MainPage,
  DessertPage,
  PiesPage,
  ContactPage,
  VisualPage,
} from "./pages";

function App() {
  return (
    <Switch>
      <Router
        basename={process.env.PUBLIC_URL}
        path="/"
        exact
        component={HomePage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/starter"
        component={StarterPage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/main"
        component={MainPage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/dessert"
        component={DessertPage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/pies"
        component={PiesPage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/contact"
        component={ContactPage}
      />
      <Router
        basename={process.env.PUBLIC_URL}
        path="/visual"
        component={VisualPage}
      />
    </Switch>
  );
}

export default App;
