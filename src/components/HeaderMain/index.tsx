import React from "react";
import './styles.scss'
import SearchBar from "../SearchBar";

import logo from "./img/Logo.svg";
import box from "./img/Box.svg";
import heart from "./img/Heart.svg";
import userCircle from "./img/UserCircle.svg";
import shoppingCart from "./img/ShoppingCart.svg";

const icons = [
  { src: box, alt: "envio" },
  { src: heart, alt: "favoritos" },
  { src: userCircle, alt: "minha conta" },
  { src: shoppingCart, alt: "carrinho" },
];

function HeaderMain() {
  return (
    <div className="header-main">
      <img src={logo} alt="logotipo vtex" />

      <SearchBar />

      <div className="header-icons">
        {icons.map((icon, index) => (
          <a href="#">
            <img key={index} src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeaderMain;
