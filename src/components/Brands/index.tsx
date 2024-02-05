import React from "react";
import BrandCard from "../BrandCard";
import "./style.scss";

function Brands() {
  return (
    <section>
      <div className="title">
        <h2>Navegue por marcas</h2>
      </div>

      <div className="brands-container">
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </div>
    </section>
  );
}
export default Brands;
