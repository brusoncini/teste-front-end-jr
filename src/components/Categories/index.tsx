import React from "react";
import crown from "./img/CrownSimple.svg";
import "./style.scss";

function Categories() {
  const categories = [
    { category: "TODAS CATEGORIAS" },
    { category: "SUPERMERCADO" },
    { category: "LIVROS" },
    { category: "MODA" },
    { category: "LANÇAMENTOS" },
    { category: "OFERTAS DO DIA" },
    { category: "ASSINATURA", icon: <img src={crown} alt="assinatura" /> },
  ];

  return (
    <nav className="categories">
      <ul>
        {categories.map((item, index) => (
          <li>
            <a href="#">
              {item.icon}
              {item.category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
