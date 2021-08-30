import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Categories from "./Components/Pages/Categories/Categories";
import Planner from "./Components/Pages/Planner/Planner";
import Recipe from "./Components/Pages/Recipe/Recipe";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import AuthLayout from "./Components/Layout/AuthLayout";
import Signup from "./Components/Pages/Auth/Signup/Signup";
import ConfirmEmail from "./Components/Pages/Auth/ConfirmEmail/ConfirmEmail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/auth">
          <AuthLayout>
            <Switch>
              <Route path="/auth/signup">
                <Signup />
              </Route>
              <Route path="/auth/confirmation">
                <ConfirmEmail />
              </Route>
            </Switch>
            {/* <Redirect to="/auth/signup"/> */}
          </AuthLayout>
        </Route>
        <Route path="/">
          <Layout>
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
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
