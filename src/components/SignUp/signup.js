import React from "react";
import { navigate, Link } from "gatsby";
// import Form from "../Form";
// import View from "../View";
import Header from "../Header";
import { handleLogin, isLoggedIn } from "../../utils/auth";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./index.scss";

class SignUp extends React.Component {
  state = {
    email: ``,
    password: ``,
    isError: false,
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  // handleClose = () => {
  //   this.setState({ isError: false });
  // };

  renderAction = () => (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  render() {

    return (
      <>
        <Header />
        <div className="login-page">
          <div class="login-container">
            <div class="registration form">
              <div className="login-header">Sign Up </div>
              <form
                method="post"
                onChange={(event) => this.handleUpdate(event)}
                onSubmit={(event) => {
                  this.handleSubmit(event);
                }}
              >
                <div className="input-spaces">
                  <input type="email" name="email" placeholder="Email" id="email" />
                </div>
                <div className="input-spaces">
                  <input
                    type="password"
                    name="password"
                    placeholder="New password"
                    id="password"
                  />
                </div>
                <div className="button-block-2">
                  <Button variant="contained" className="button" type="submit">
                    Confirm
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
