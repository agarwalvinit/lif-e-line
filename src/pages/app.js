import React from "react";
import { Router } from "@reach/router";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import DonatePage from "../components/Donate/donate";
import RequestPage from "../components/Request/request";
import Avail from "../components/Available/available";
import SignupPage from "../components/SignUp/signup";
import LandingPage from "../components/LandingPage";

const App = (props) => {
  return (
    <Router>
      <LandingPage path="/" component={LandingPage} />
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/donate" component={DonatePage} />
      <PrivateRoute path="/app/request" component={RequestPage} />
      <PrivateRoute path="/app/available" component={Avail} />
      <PrivateRoute path="/app/signup" component={SignupPage} />

      <Login path="/app/login" />
    </Router>
  );
};

export default App;
