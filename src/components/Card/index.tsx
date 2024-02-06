import React from "react";
import "./style.scss";

import Button from '../Button'

interface CardProps {
  title: string;
  description: string;
}

function Card ({ title, description }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text='CONFIRA'/>
      </div>
    </div>
  );
};

export default Card;
