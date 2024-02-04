import React from "react";
import "./style.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-title">
          <h2>Venha conhecer nossas promoções!</h2>
          <h3>50% Off nos produtos</h3>
          <button>Ver produto</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
