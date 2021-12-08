import React from "react";
import { Link, navigate } from "gatsby";
import Button from "@mui/material/Button";
import { isLoggedIn, logout } from "../../utils/auth";
import {
  header,
  header__wrap,
  header__nav,
  header__link,
  header__linkHome,
} from "./header.module.scss";

const Header = () => (
  <header className={header}>
    <div className={header__wrap}>
      <Link to={isLoggedIn()?"/app/profile":"/"} className={`${header__link} ${header__linkHome}`}>
        Life-e-line
      </Link>
      <nav role="main" className={header__nav}>
        {isLoggedIn() && (
          <>
            {/* <Button
              className={header__link}
              onClick={(event) => {
                event.preventDefault();
                navigate(`/app/profile`);
              }}
            >
              Home
            </Button> */}
            <Button
              className={header__link}
              onClick={(event) => {
                event.preventDefault();
                logout(() => navigate(`/app/login`));
              }}
            >
              Logout
            </Button>
          </>
        )}
      </nav>
    </div>
  </header>
);

export default Header;
