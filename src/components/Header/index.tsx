import React from "react";

import logo from "./img/Logo.svg";
import box from "./img/Box.svg";
import heart from "./img/Heart.svg";
import userCircle from "./img/UserCircle.svg";
import shoppingCart from "./img/ShoppingCart.svg";
import SearchBar from "../SearchBar";
import "./style.scss";

const icons = [
  { src: box, alt: "envio" },
  { src: heart, alt: "favoritos" },
  { src: userCircle, alt: "minha conta" },
  { src: shoppingCart, alt: "carrinho" },
];

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logotipo vtex" />

      <SearchBar />
      
      <div className="header-icons">
        {icons.map((icon, index) => (
          <a href="#"><img key={index} src={icon.src} alt={icon.alt} /></a>
        ))}
      </div>
    </header>
  );
}

export default Header;
