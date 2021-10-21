import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "../Header";

import "./donateAnOrgan.scss";

const DonateAnOrgan = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="donate-organ-container">
        <form
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit(true);
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
                  name="name"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Donor Age"
                  name="age"
                  class="input2 input"
                />
                <input
                  type="text"
                  placeholder="Blood Group"
                  class="input3 input"
                  name="blood"
                />
                <br />
                <br />
                <select id="org" name="org" class="input4">
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
                <div class="box1">
                  <input type="file" id="file" name="file" class="input6" />
                  <label for="file">
                    <div class="upload1">&#x2191; Upload Prescription</div>
                  </label>
                </div>
                <input type="submit" value="Next" class="btn1" />
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

export default DonateAnOrgan;
