import React from "react";
import { Link } from "gatsby";
import { getCurrentUser } from "../../utils/auth";
import Header from "../Header";

import "./profile.scss";

const Profile = () => {
  const { name } = getCurrentUser();

  return (
    <>
      <Header />
      <div className="profile-container">
        <div class="containercard">
          <Link to= "/app/available">
            <div className="item item-1">
              <p>AVAILABLE ORGANS</p>
            </div>
          </Link>
          <Link to="/app/donate-an-organ">
            <div className="item item-2">
              <p>DONATE AN ORGAN</p>
            </div>
          </Link>
          <Link to="/app/accept">
            <div className="item item-3">
              <p>ACCEPT AN ORGAN</p>
            </div>
          </Link>
        </div>

        <div class="containercard1">
          <Link to="/app/request-an-organ">
            <div className="item item-4">
              <p>REQUEST AN ORGAN</p>
            </div>
          </Link>
          <Link to="/app/PolicyCompliance">
            <div className="item item-5">
              <p>POLICY COMPLIANCE</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
