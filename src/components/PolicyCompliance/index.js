import React, { useState } from "react";
import Header from "../Header";
import check from "./Group.svg";

import "./index.scss";

const PolicyCompliance = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="policy-compliance-page">
        <div class="container10">
          <div class="conta2">
            <p className="pg">
              <h3> Terms and Conditions </h3>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              malesuada, arcu non tempor dignissim, lectus felis viverra odio,
              nec tincidunt lectus elit sed ligula. Praesent neque sem, dictum
              id pulvinar a, ultrices ut lorem. Vestibulum cursus dui
              condimentum felis posuere, molestie euismod sem ullamcorper. Sed
              dictum nunc ac nisi vulputate, vitae congue magna maximus.
              Curabitur viverra ex in est viverra, ac viverra massa congue.
              Pellentesque euismod risus ultrices, molestie velit ac, elementum
              massa. Aenean lectus magna, vulputate a risus nec, consectetur
              accumsan erat. Aliquam viverra at sem id eleifend. Proin non elit
              ut elit lobortis rhoncus vitae et ante. Aliquam erat volutpat.
            </p>
            <br />
            <p className="pg">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              malesuada, arcu non tempor dignissim, lectus felis viverra odio,
              nec tincidunt lectus elit sed ligula. Praesent neque sem, dictum
              id pulvinar a, ultrices ut lorem. Vestibulum cursus dui
              condimentum felis posuere, molestie euismod sem ullamcorper. Sed
              dictum nunc ac nisi vulputate, vitae congue magna maximus.
              Curabitur viverra ex in est viverra, ac viverra massa congue.
              Pellentesque euismod risus ultrices, molestie velit ac, elementum
              massa. Aenean lectus magna, vulputate a risus nec, consectetur
              accumsan erat. Aliquam viverra at sem id eleifend. Proin non elit
              ut elit lobortis rhoncus vitae et ante. Aliquam erat volutpat.{" "}
            </p>
          </div>
          <div class="container2">
            <div class="conta3">
              <p className="pg">
                <br />
                <img className="photo" src={check} alt="" />I have read and
                agree to all the terms and conditions of the company
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyCompliance;
