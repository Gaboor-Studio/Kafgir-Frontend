import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Categories from "./Components/Pages/Categories/Categories";
import Planner from "./Components/Pages/Planner/Planner";
import Recipe from "./Components/Pages/Recipe/Recipe";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/planner">
          <Planner />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
