import React from "react";
import "./style.scss";

function EmailCard() {
  return (
    <div className="email-card">
      <p className="card-text">
        CADASTRE-SE E RECEBA NOSSAS
        <br/>
        <strong>NOVIDADES E PROMOÇÕES</strong>
      </p>
      <p className="card-description">
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <div className="email-input">
        <input type="email" placeholder="SEU E-MAIL" />
        <button>OK</button>
      </div>
    </div>
  );
}

export default EmailCard;
