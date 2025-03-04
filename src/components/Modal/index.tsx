import React, { useState } from "react";
import "./style.scss";

import { Product } from "../Carousel";
import Button from "../Button";
import close from "./img/close.svg";
import plus from "./img/plus.svg";
import minus from "./img/minus.svg";

interface ModalProps {
  product: Product;
  closeModal: () => void;
}

function Modal({ product, closeModal }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="modal-overlay"></div>

      <div className="modal">
        <button onClick={closeModal} className="button-close">
          <img src={close} alt="fechar" />
        </button>

        <div className="modal-photo">
          <img src={product.photo} alt="" />
        </div>

        <div>
          <h2 className="modal-name">{product.productName}</h2>
          <p className="modal-price">
            R$ {product.price.toLocaleString("pt-BR")}
          </p>
          <p className="modal-description">{product.descriptionShort}</p>
          <a href="#" className="modal-link">
            Veja mais detalhes do produto {">"}
          </a>

          <div className="counter">
            <button className="input-button" onClick={decreaseQuantity}>
              <img src={minus} alt="diminuir" />
            </button>
            <input type="text" value={quantity} readOnly />
            <button className="input-button" onClick={increaseQuantity}>
              <img src={plus} alt="aumentar" />
            </button>
          </div>

          <Button text="COMPRAR" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
