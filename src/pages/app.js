import React from "react";
import { Router } from "@reach/router";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/Signup";
import PrivateRoute from "../components/PrivateRoute";
import LandingPage from "../components/LandingPage";
import RequestAnOrgan from "../components/RequestAnOrgan";
import DonateAnOrgan from "../components/DonateAnOrgan";
import Accept from "../components/Accept/accept";
import RequestsMade from "../components/RequestsMade";
import DonationsMade from "../components/DonationsMade";
import Available from "../components/Available";
import Verify from "../components/Verify";
import Verified from "../components/Verified";
import SignUpDetails from "../components/SignUpDetails";
import PolicyCompliance from "../components/PolicyCompliance";
// import axios from 'axios';

import "./global.css";

const App = (props) => {
  // axios.defaults.baseURL = "https://life-line-app-backend.herokuapp.com"
  // const submit = () => {
  //   axios.post("/hospital", {
  //     license_no: "MA10355T6T",
  //     name: "Fortis Hospital",
  //     building: "Buiilding 7",
  //     street: "Charpai Road",
  //     city: "New Delhi",
  //     pincode: "230192",
  //     state: "New Delhi",
  //     email: "arya715@gmail.com"   
  //   }).then(() => {
  //     console.log("succes")
  //   }).catch(() => {
  //     console.log("error")
  //   })
  // }
  return (
    <Router>
      {/* <button onClick={submit}>click me</button> */}

      <LandingPage path="/" component={LandingPage} />
      <PrivateRoute path="/app/request-an-organ" component={RequestAnOrgan} />
      <PrivateRoute path="/app/donate-an-organ" component={DonateAnOrgan} />
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/accept" component={Accept} />
      <PrivateRoute path="/app/request-made" component={RequestsMade} />
      <PrivateRoute path="/app/donations-made" component={DonationsMade} />
      <PrivateRoute path="/app/available" component={Available} />
      <PrivateRoute path="/app/verify" component={Verify} />
      <PrivateRoute path="/app/verified" component={Verified} />
      <PrivateRoute path="/app/sign-up-details" component={SignUpDetails} />
      <PrivateRoute path="/app/PolicyCompliance" component={PolicyCompliance} />

      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  );
};

export default App;
