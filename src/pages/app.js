import React from "react";
import { Router } from "@reach/router";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/Signup";
import PrivateRoute from "../components/PrivateRoute";
import RequestPage from "../components/Request/request";
import LandingPage from "../components/LandingPage";
import RequestAnOrgan from "../components/RequestAnOrgan";
import DonateAnOrgan from "../components/DonateAnOrgan";
import Accept from "../components/Accept/accept";
import Verify from "../components/Verify";
import Verified from "../components/Verified";

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
      <PrivateRoute path="/app/verify" component={Verify} />
      <PrivateRoute path="/app/verified" component={Verified} />

      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  );
};

export default App;
