import React from "react";
import "./style.scss";
import EmailCard from "../EmailCard";

import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import youtube from "./img/youtube.svg";
import visa from "./img/visa.svg";
import elo from "./img/elo.svg";
import alelo from "./img/alelo.svg";
import diners from "./img/dinners.svg";
import ifood from "./img/ifood.svg";
import mastercard from "./img/mastercard.svg";
import pix from "./img/pix.svg";
import amex from "./img/amex.svg";
import ticket from "./img/ticket.svg";
import sodexo from "./img/sodexo.svg";

interface FooterInfoProps {
  aboutUsLinks: string[];
  usefulInfoLinks: string[];
}

const socialIcons = [facebook, instagram, youtube];
const paymentMethods = [
  visa,
  elo,
  alelo,
  diners,
  ifood,
  mastercard,
  pix,
  amex,
  ticket,
  sodexo,
];

function FooterInfo({ aboutUsLinks, usefulInfoLinks }: FooterInfoProps) {
  return (
    <div className="info-container">
      <div className="about">
        <h4>Sobre nós</h4>
        <ul>
          {aboutUsLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>

        <div className="social-icons">
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon} alt={icon} />
          ))}
        </div>
      </div>

      <div className="useful-info">
        <h4>INFORMAÇÕES ÚTEIS</h4>
        <ul>
          {usefulInfoLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>

      <div className="payment-methods">
        <h4>FORMAS DE PAGAMENTO</h4>
        <ul className="payment-container">
          {paymentMethods.map((icon, index) => (
            <img key={index} src={icon} alt={icon} />
          ))}
        </ul>
      </div>

      <div className="email-card-container">
        <EmailCard/>
      </div>
    </div>
  );
}

export default FooterInfo;
