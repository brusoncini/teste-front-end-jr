import React from "react";
import "./style.scss";

function RelatedProducts() {
  const categories = [
    { option: "CELULAR" },
    { option: "ACESSÓRIOS" },
    { option: "TABLETS" },
    { option: "NOTEBOOKS" },
    { option: "TVS" },
    { option: "VER TODOS" },
  ];

  return (
    <section className="related-container">
      <div className="related-categories">
        <ul>
          {categories.map((item, index) => (
            <li>
              <a href="#">{item.option}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RelatedProducts;
