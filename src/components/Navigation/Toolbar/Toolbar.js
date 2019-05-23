import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

import "./Toolbar.css";

const toolbar = props => (
  <header className="Toolbar">
    <div>MENU</div>
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
