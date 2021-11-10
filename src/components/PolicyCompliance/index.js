import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "../Header";

import "./index.scss";

const PolicyCompliance = () => {
  const [isSubmited, onFormSubmit] = useState(false);

  return (
    <>
      <Header />
      <div class="policy-compliance-page">
        <div class="container1">
          <div class="conta2">
              <p>
                <h3> Terms and Conditions </h3>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent malesuada, arcu non tempor dignissim, lectus felis
                viverra odio, nec tincidunt lectus elit sed ligula. Praesent
                neque sem, dictum id pulvinar a, ultrices ut lorem. Vestibulum
                cursus dui condimentum felis posuere, molestie euismod sem
                ullamcorper. Sed dictum nunc ac nisi vulputate, vitae congue
                magna maximus. Curabitur viverra ex in est viverra, ac viverra
                massa congue. Pellentesque euismod risus ultrices, molestie
                velit ac, elementum massa. Aenean lectus magna, vulputate a
                risus nec, consectetur accumsan erat. Aliquam viverra at sem id
                eleifend. Proin non elit ut elit lobortis rhoncus vitae et ante.
                Aliquam erat volutpat.
              </p>
              <br />
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent malesuada, arcu non tempor dignissim, lectus felis
                viverra odio, nec tincidunt lectus elit sed ligula. Praesent
                neque sem, dictum id pulvinar a, ultrices ut lorem. Vestibulum
                cursus dui condimentum felis posuere, molestie euismod sem
                ullamcorper. Sed dictum nunc ac nisi vulputate, vitae congue
                magna maximus. Curabitur viverra ex in est viverra, ac viverra
                massa congue. Pellentesque euismod risus ultrices, molestie
                velit ac, elementum massa. Aenean lectus magna, vulputate a
                risus nec, consectetur accumsan erat. Aliquam viverra at sem id
                eleifend. Proin non elit ut elit lobortis rhoncus vitae et ante.
                Aliquam erat volutpat.{" "}
              </p>
            </div>
          <div class="conta2">
              <p>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent malesuada, arcu non tempor dignissim, lectus felis
                viverra odio
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default PolicyCompliance;
