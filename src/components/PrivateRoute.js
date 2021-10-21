import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { isLoggedIn } from "../utils/auth";

const PUBLIC_ROUTES = ["/", "/app/login"];

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && !PUBLIC_ROUTES.includes(location.pathname)) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/`);
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
