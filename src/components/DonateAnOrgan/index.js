import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "../Header";

import "./donateAnOrgan.scss";
import { isLoggedIn } from "../../utils/auth";

const DonateAnOrgan = () => {
  const [isSubmited, onFormSubmit] = useState(false);
  const [state, setState] = useState({
    "donor_name":"",
    "donor_age":0,
    "organ":"",
    "blood_group":"",
    "condition":"",
  });

  const handleUpdate = (event) => {
    setState({...state,
      [event.target.name]: event.target.value,
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const email = isLoggedIn();
  }
  

  return (
    <>
      <Header />
      <div class="donate-organ-container">
        <form
          method="post"
          onChange={(event) => handleUpdate(event)}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div class="box">
            {!isSubmited ? (
              <>
                <h1 class="h1">DONATE AN ORGAN</h1>
                <h2 class="h2">Donor Details</h2>
                <input
                  type="text"
                  placeholder="Donor Name"
                  class="input1"
                  width="400px"
                  name="donor_name"
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Donor Age"
                  name="donor_age"
                  class="input2 input"
                />
                <input
                  type="text"
                  placeholder="Blood Group"
                  class="input3 input"
                  name="blood_group"
                />
                <br />
                <br />
                <select id="org" name="organ" class="input4">
                  <option value="selorg">Select Organ</option>
                  <option value="heart">Heart</option>
                  <option value="liver">Liver</option>
                  <option value="kidney">Kidney</option>
                  <option value="eyes">Eyes</option>
                </select>{" "}
                <br />
                <br />
                <select id="condition" name="condition" class="input5">
                  <option value="conorg">Condition of the Organ</option>
                  <option value="new">New</option>
                  <option value="old">Old</option>
                  <option value="good">Good</option>
                  <option value="bad">Bad</option>
                </select>{" "}
                <br />
                <br />
                <input type="submit" value="Next" class="btn1" />
              </>
            ) : (
              <div className="donation-accepted-container">
                <CheckCircleOutlineIcon
                  color="error"
                  style={{ fontSize: "80px" }}
                />
                <div className="p-t-2">Organ has been donated</div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default DonateAnOrgan;
