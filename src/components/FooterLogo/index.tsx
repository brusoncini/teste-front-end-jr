import React from "react";
import "./style.scss";
import econverse from "./img/econverse.svg";
import vtex from "./img/vtex.svg";

const logos = [econverse, vtex];

function FooterLogo() {
  return (
    <div className="copyright">
      <p>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos.
        <br/> 
        É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </p>

      <div className="logo">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={logo} />
        ))}
      </div>
    </div>
  );
}

export default FooterLogo;
