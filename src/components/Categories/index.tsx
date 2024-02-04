import React from "react";
import monitor from "./img/monitor.svg";
import market from "./img/market.svg";
import whiskey from "./img/whiskey.svg";
import tools from "./img/tools.svg";
import health from "./img/health.svg";
import running from "./img/running.svg";

import "./style.scss";

function Categories() {
  const categories = [
    {
      icon: <img src={monitor} alt="tecnologia" />,
      text: <p>Tecnologia</p>,
    },
    {
      icon: <img src={market} alt="supermercado" />,
      text: <p>Supermercado</p>,
    },
    {
      icon: <img src={whiskey} alt="bebidas" />,
      text: <p>Bebidas</p>,
    },
    {
      icon: <img src={tools} alt="ferramentas" />,
      text: <p>Ferramentas</p>,
    },
    {
      icon: <img src={health} alt="saúde" />,
      text: <p>Saúde</p>,
    },
    {
      icon: <img src={running} alt="esportes e fitness" />,
      text: <p>Esportes e Fitness</p>,
    },
  ];

  return (
    <div className="categories-container">
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href="#">
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
