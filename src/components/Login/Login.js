import React from "react";
import { navigate, Link } from "gatsby";
import Form from "../Form";
import View from "../View";
import Header from "../Header";
import { handleLogin, isLoggedIn } from "../../utils/auth";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./index.scss";

class Signup extends React.Component {
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
    const loginStatus = handleLogin(this.state);

    if (loginStatus) {
      navigate(`/app/profile`);
    } else {
      this.setState({ isError: true });
    }
  }
  
  handleClose = () => {
    this.setState({ isError: false });
  };

  renderAction = () => (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={this.handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`);
    }

    return (
      <>
        <Header />
        <div className="login-page">
          <div class="login-container">
            <div class="registration form">
              <div className="login-header">LOG IN </div>
              <form
                method="post"
                onChange={(event) => this.handleUpdate(event)}
                onSubmit={(event) => {
                  this.handleSubmit(event);
                }}
              >
                <div className="input-spaces">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input-spaces">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="button-block">
                  <Button variant="contained" className="button" type="submit">
                    Log in
                  </Button>
                  <Snackbar
                    open={this.state.isError}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message="For demo purpose use username: demo@example.org and
                  password: demo"
                    action={this.renderAction()}
                  />
                </div>
                <p> Or </p>
                <div className="button-block">
                  <Link to="/app/signup/">
                    <Button className="button" variant="contained">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
