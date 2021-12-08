import React, { useState } from "react";
import Header from "../Header";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { getUser } from "../../utils/auth";
import { POST_UN_AUTH } from "../../utils/http";

import "./requestAnOrgan.scss";

const RequestAnOrgan = () => {
  const [isSubmited, onFormSubmit] = useState(false);
  const [state, setState] = useState({
    "patient_name":"",
    "patient_age":0,
    "blood_group":"",
    "organ":"",
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
    const response = await POST_UN_AUTH('/request_organ',{...state, email});
    if(!response.error){
      console.log(response)
      onFormSubmit(true)
    }
  }

  return (
    <>
      <Header />
      <div class="request-organ-container">
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
                <h1 class="h1">REQUEST AN ORGAN</h1>
                <h2 class="h2">Patient Details</h2>
                <input
                  type="text"
                  placeholder="Patient Name"
                  class="inp1"
                  width="400px"
                  name="patient_name"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Patient Age"
                  name="patient_age"
                  class="inp2 input"
                />
                <input
                  type="text"
                  placeholder="Blood Group"
                  class="inp3 input"
                  name="blood_group"
                />
                <br />
                <br />
                <select id="org" name="organ" class="inp4">
                  <option value="selorg">Select Organ</option>
                  <option value="heart">Heart</option>
                  <option value="liver">Liver</option>
                  <option value="kidney">Kidney</option>
                  <option value="eyes">Eyes</option>
                </select>{" "}
                <br />
                <br />
                <input type="submit" value="Request" class="btn" />
              </>
            ) : (
              <div className="request-accepted-container">
                <CheckCircleOutlineIcon
                  color="error"
                  style={{ fontSize: "80px" }}
                />
                <div className="p-t-2">REQUEST FOR AN ORGAN HAS BEEN MADE</div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestAnOrgan;
