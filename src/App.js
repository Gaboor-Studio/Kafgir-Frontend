import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Categories from "./Components/Pages/Categories/Categories";
import Planner from "./Components/Pages/Planner/Planner";
import Recipe from "./Components/Pages/Recipe/Recipe";
import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import AuthLayout from "./Components/Layout/AuthLayout";
import Signup from "./Components/Pages/Auth/Signup/Signup";
import ConfirmEmail from "./Components/Pages/Auth/ConfirmEmail/ConfirmEmail";
import Login from "./Components/Pages/Auth/Login/Login";
import ChangePassword from "./Components/Pages/Auth/ChangePassword/ChangePassword";
import ForgotPassword from "./Components/Pages/Auth/ForgotPassword/ForgotPassword";
import Profile from "./Components/Pages/Profile/Profile";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import PopularFood from "./Components/Pages/PopularFood/PopularFood"

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
              <Route path="/auth/login">
                <Login />
              </Route>
              <Route path="/auth/change-password">
                <ChangePassword />
              </Route>
              {/* <Route path="/auth/choose-new-password/:reset_token">
                <ChooseNewPassword />
              </Route> */}
              <Route path="/auth/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/auth">
                <Signup />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path="/">
          <Layout>
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/planner">
                <Planner />
              </Route>
              <Route path="/recipe">
                <Recipe />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/popular-food">
                <PopularFood />
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
