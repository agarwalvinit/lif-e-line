import React, { useState } from "react";
import Header from "../Header";

import "./index.scss";

const SignUpDetails = () => 
{
  const [isSubmited, onFormSubmit] = useState(false);
  
  return (
    <>
      <Header />
      <div class="container5">
        <form 
        method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit(true);
          }}
        >
          <div class="bux">
            <h1 class="h1">SIGN UP</h1>
            <input type="text" placeholder="License Number" class="input1" width="100%" name="License Number"/>
            <br />
            <input type="text" placeholder="Hospital Name" class="input1" width="100%" name="Hospital Name" /><br /><br />
            <p className="para">Address</p>
            <input type="text" placeholder="Building Number" name="Building Number" class="input1"/><br />
            <div class="three">
              <select id="city" name="city" class="input4">
                <option value="city">City</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="delhi">Delhi</option>
                <option value="chennai">Chennai</option>
                <option value="kol">Kolkata</option>
                <option value="ahem">Ahmedabad</option>
              </select><br /><br />
            <input type="text" placeholder="Pincode" class="input5" name="pin"/><br />
            <select id="state" name="state" class="input6">
              <option value="state">State</option>
              <option value="maha">Maharashtra</option>
              <option value="tn">Tamil Nadu</option>
              <option value="delhi">Delhi</option>
              <option value="gj">Gujarat</option>
              <option value="wb">West Bengal</option>
            </select> <br />
            </div><br />
            <p className="para">Contact details</p>
            <div class="two">
              <input type="text" placeholder="+91" class="input7" name="phnint" value="+91"/><br /><br />
              <input type="text" placeholder="Phone Number" class="input8" name="phone"/><br /><br />
            </div>
            <input type="text" placeholder="Email" class="input1" width="400px" name="email"/><br />
            <input type="button" value="Sign Up" class="btn1"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpDetails;
