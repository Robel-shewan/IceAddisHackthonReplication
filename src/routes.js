import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./views/pages/LoginPage";
import LandingPage from "./views/pages/LandingPage";
import HomePage from "./views/pages/HomePage";
import CoursePage from "./views/pages/CoursePage";
import ContentPage from "./views/pages/ContentPage";
import MissionPage from "./views/pages/MissionPage";
const Routes = () => {
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const routes = (
    <>
      <Route path="/login" component={LoginPage} />
      <Route path="/shop" component={CoursePage} />
      <Route path="/learn" component={ContentPage} />
      <Route path="/our-story" component={MissionPage} />

      <Route path="/" exact component={HomePage} />

      <Redirect to="/" />
    </>
  );

  return (
    <div>
      <Switch>{routes}</Switch>
    </div>
  );
};

export default Routes;
