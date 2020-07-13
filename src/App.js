import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/starter" component={StarterPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/dessert" component={DessertPage} />
        <Route path="/pies" component={PiesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/visual" component={VisualPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
