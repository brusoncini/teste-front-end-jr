import React from "react";
import HeaderTop from "../HeaderTop";
import HeaderMain from "../HeaderMain";
import Navigation from "../Navigation";

function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <Navigation />
    </header>
  );
}

export default Header;
