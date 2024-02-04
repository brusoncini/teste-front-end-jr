import React from "react";
import crown from "./img/CrownSimple.svg";
import "./style.scss";

function Navigation() {
  const nav = [
    { option: "TODAS CATEGORIAS" },
    { option: "SUPERMERCADO" },
    { option: "LIVROS" },
    { option: "MODA" },
    { option: "LANÇAMENTOS" },
    { option: "OFERTAS DO DIA" },
    { option: "ASSINATURA", icon: <img src={crown} alt="assinatura" /> },
  ];

  return (
    <nav className="categories">
      <ul>
        {nav.map((item, index) => (
          <li>
            <a href="#">
              {item.icon}
              {item.option}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
