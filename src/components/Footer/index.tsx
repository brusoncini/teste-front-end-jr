import React from "react";
import FooterInfo from "../FooterInfo";
import FooterLogo from "../FooterLogo";

function Footer() {
  const aboutUsLinks = ["CONHEÇA", "COMO COMPRAR", "INDICAÇÃO E DESCONTO"];
  const usefulInfoLinks = [
    "FALE CONOSCO",
    "DÚVIDAS",
    "PRAZO DE ENTREGA",
    "FORMAS DE PAGAMENTO",
    "POLÍTICA DE PRIVACIDADE",
    "TROCAS E DEVOLUÇÕES",
  ];

  return (
    <footer>
      <FooterInfo
        aboutUsLinks={aboutUsLinks}
        usefulInfoLinks={usefulInfoLinks}
      />
      <FooterLogo />
    </footer>
  );
}

export default Footer;
