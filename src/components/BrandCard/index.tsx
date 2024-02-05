import React from "react";
import "./style.scss";
import cardLogo from "./img/CardLogo.svg";

function BrandCard() {
  return (
    <div className="brand-card">
      <a href="#">
        <img src={cardLogo} alt="logo vtex" />
      </a>
    </div>
  );
}

export default BrandCard;
