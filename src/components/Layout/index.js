import React from "react";

import Header from "../Header";

// Global styles and component-specific styles.
import "./global.css";
import { main } from "./main.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={main}>{children}</main>
  </>
);

export default Layout;
