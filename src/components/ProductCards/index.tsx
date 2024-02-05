import React from "react";
import RelatedTitle from "../RelatedTitle";
import Card from "../Card";
import "./style.scss";

function ProductCards() {
  return (
    <section>
      <div className="title-container">
        <RelatedTitle />
        <p>Ver todos</p>
      </div>

      <div className="card-container">
        <Card
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
        <Card
          title="Produtos"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
    </section>
  );
}

export default ProductCards;
