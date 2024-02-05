import React from "react";
import "./style.scss";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>CONFIRA</button>
      </div>
    </div>
  );
};

export default Card;
