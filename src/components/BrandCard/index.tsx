import React from "react";
import "./style.scss";
import cardLogo from "./img/CardLogo.svg";

function BrandCard() {
  return (
    <div className="brand-card">
      <img src={cardLogo} alt="logo vtex" />
    </div>
  );
}

export default BrandCard;
