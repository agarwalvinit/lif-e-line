import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "../Header";

import "./donateAnOrgan.scss";
import { getUser } from "../../utils/auth";
import { POST_UN_AUTH } from "../../utils/http";

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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await getUser();
    const email = user.email;
    console.log({...state, email});
    const response = await POST_UN_AUTH('/organ',{...state, email});
    if(!response.error){
      console.log(response)
      console.log("test")
      onFormSubmit(true)
    }
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
                  required
                  type="text"
                  placeholder="Donor Name"
                  class="input1"
                  width="400px"
                  name="donor_name"
                />
                <br />
                <br />
                <input
                  required
                  type="number"
                  placeholder="Donor Age"
                  name="donor_age"
                  class="input2 input"
                />
                <input
                  required
                  type="text"
                  placeholder="Blood Group"
                  class="input3 input"
                  name="blood_group"
                />
                <br />
                <br />
                <select id="org" name="organ" class="input4" required>
                  <option value="">Select Organ</option>
                  <option value="heart">Heart</option>
                  <option value="liver">Liver</option>
                  <option value="kidney">Kidney</option>
                  <option value="eyes">Eyes</option>
                </select>{" "}
                <br />
                <br />
                <select id="condition" name="condition" class="input5" required>
                  <option value="">Condition of the Organ</option>
                  <option value="NEW">New</option>
                  <option value="OLD">Old</option>
                  <option value="GOOD">Good</option>
                  <option value="BAD">Bad</option>
                </select>{" "}
                <br />
                <br />
                <input type="submit" required value="Next" class="btn1" />
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
