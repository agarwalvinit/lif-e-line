import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Status from "../components/Status";
import DonatePage from "../components/Donate/donate";
import RequestPage from "../components/Request/request";
import Accept from "../components/Accept/accept";
import  SignupPage from "../components/SignUp/signup";


const App = () => {
  return (
    <Layout>
      <Status />
      <Router>
        <PrivateRoute path="/app/details" component={Details} />
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/donate" component={DonatePage} />
        <PrivateRoute path="/app/request" component={RequestPage} />
        <PrivateRoute path="/app/accept" component={Accept} />
        <PrivateRoute path="/app/signup" component={ SignupPage} />

        <Login path="/app/login" />
      </Router>
    </Layout>
  );
};

export default App;
