import React from "react";
import "./style.scss";

import Button from '../Button'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-title">
          <h2>Venha conhecer nossas promoções!</h2>
          <h3>50% Off nos produtos</h3>
          <Button text='Ver produto'/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
