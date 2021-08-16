import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Categories from './Components/Pages/Categories/Categories';
import Planner from './Components/Pages/Planner/Planner';
import Recipe from './Components/Pages/Recipe/Recipe';

function App() {
  return (
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
    </Switch>
  );
}

export default App;
