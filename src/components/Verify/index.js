import React, { useState } from "react";
import Header from "../Header";
import mail from "/Group 11.png"
import "./index.scss";

const Verify = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="verify-page">
        <div class="container">
          <h2> Sign Up </h2>
          <div class="cont2">
            <p>Verify your email</p>
            < br />
            <img className="photo" src= {mail} alt="" />
            <div class="text">
              <p>
                In order register please click on the verification link that
                will be sent to your registered email ID
              </p>
            </div>
            <input type="submit" value="send email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
