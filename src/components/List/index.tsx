import React from "react";
import shieldCheck from "./img/ShieldCheck.svg";
import creditCard from "./img/CreditCard.svg";
import truck from "./img/Truck.svg";
import "./style.scss";

function List() {
  const items = [
    {
      icon: <img src={shieldCheck} alt="segurança" />,
      text: (
        <p>
          Compra <strong>100% segura</strong>
        </p>
      ),
    },
    {
      icon: <img src={creditCard} alt="caminhão" />,
      text: (
        <p>
          <strong>Frete grátis</strong> acima de R$ 200
        </p>
      ),
    },
    {
      icon: <img src={truck} alt="cartão de crédito" />,
      text: (
        <p>
          <strong>Parcele</strong> suas compras
        </p>
      ),
    },
  ];

  return (
    <div className="list-container">
      <ul>
        {items.map((item, index) => (
          <li>
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
