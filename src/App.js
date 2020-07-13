import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Route, Switch } from "react-router-dom";
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
      <Route
        basename={process.env.PUBLIC_URL}
        path="/"
        exact
        component={HomePage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/starter"
        component={StarterPage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/main"
        component={MainPage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/dessert"
        component={DessertPage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/pies"
        component={PiesPage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/contact"
        component={ContactPage}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/visual"
        component={VisualPage}
      />
    </Switch>
  );
}

export default App;
