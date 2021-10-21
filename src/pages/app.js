import React from "react";
import { Router } from "@reach/router";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute";
import RequestPage from "../components/Request/request";
import SignupPage from "../components/SignUp/signup";
import LandingPage from "../components/LandingPage";
import RequestAnOrgan from "../components/RequestAnOrgan";
import DonateAnOrgan from "../components/DonateAnOrgan";
import Accept from "../components/Accept/accept";

import "./global.css";

const App = (props) => {
  return (
    <Router>
      <LandingPage path="/" component={LandingPage} />
      <PrivateRoute path="/app/request-an-organ" component={RequestAnOrgan} />
      <PrivateRoute path="/app/donate-an-organ" component={DonateAnOrgan} />
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/request" component={RequestPage} />
      <PrivateRoute path="/app/accept" component={Accept} />
      <PrivateRoute path="/app/signup" component={SignupPage} />

      <Login path="/app/login" />
    </Router>
  );
};

export default App;
