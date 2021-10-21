import React from "react";
import { Link } from "gatsby";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="nav-bar">
        <Link to="/" className="logo">
          lif-e-line
        </Link>
        <div className="right-nav">
          <Link to="/" className="nav-space">
            About
          </Link>
          <Link to="/" className="nav-space">
            Contact
          </Link>
          <Link to="/app/login" className="nav-space">
            Login
          </Link>
          <Link to="/app/signup" className="nav-space">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
