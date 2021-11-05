import React, { useState } from "react";
import Header from "../Header";
import mail from "/Group 11.svg"
import "./index.scss";

const Verified = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="verify-page">
        <div class="container">
          <h2> Sign Up </h2>
          <div class="cont2">
            <p>Verified</p>
            < br />
            <img className="photo" src= {mail} alt="" />
            < br />
            <div class="text">
              <p>
                Your Email has been verified
              </p>
            </div>
            <input type="submit" value="Proceed" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verified;
