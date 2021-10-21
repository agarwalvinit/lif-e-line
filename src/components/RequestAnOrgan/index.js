import React, { useState } from "react";
import Header from "../Header";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./requestAnOrgan.scss";

const RequestAnOrgan = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="request-organ-container">
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
                <h1 class="h1">REQUEST AN ORGAN</h1>
                <h2 class="h2">Patient Details</h2>
                <input
                  type="text"
                  placeholder="Patient Name"
                  class="inp1"
                  width="400px"
                  name="name"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Patient Age"
                  name="age"
                  class="inp2 input"
                />
                <input
                  type="text"
                  placeholder="Blood Group"
                  class="inp3 input"
                  name="blood"
                />
                <br />
                <br />
                <select id="org" name="org" class="inp4">
                  <option value="selorg">Select Organ</option>
                  <option value="heart">Heart</option>
                  <option value="liver">Liver</option>
                  <option value="kidney">Kidney</option>
                  <option value="eyes">Eyes</option>
                </select>{" "}
                <br />
                <br />
                <div class="box1">
                  <input type="file" id="file" name="file" class="inp5" />
                  <label for="file">
                    <div class="upload">&#x2191; Upload Prescription</div>
                  </label>
                </div>
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
