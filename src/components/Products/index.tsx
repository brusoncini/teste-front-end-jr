import React, { useState } from "react";
import "./style.scss";

import productList from "../../data/productList.js";
import Slider from "react-slick";
import leftArrow from "./img/LeftArrow.svg";
import rightArrow from "./img/RightArrow.svg";
import Modal from "../Modal";

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="arrow prev" onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="arrow next" onClick={onClick}>
      <img src={rightArrow} alt="Next" />
    </button>
  );
};

function Products() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section>
      <Slider {...settings}>
        {productList.map((product: Product, index: number) => (
          <div className="product-container" key={index}>
            <div className="product-item">
              <img src={product.photo} alt={product.descriptionShort} />
              <p className="description">{product.descriptionShort}</p>
              <p className="discount">
                R$ {(product.price * 2).toLocaleString("pt-BR")}
              </p>
              <p className="price">
                R$ {product.price.toLocaleString("pt-BR")}
              </p>
              <p className="half-price">
                ou 2x de R$ {(product.price * 0.5).toLocaleString("pt-BR")} sem
                juros
              </p>
              <span className="shipping">Frete grátis</span>
              <button onClick={() => openModal(product)}>COMPRAR</button>
            </div>
          </div>
        ))}
      </Slider>
      {selectedProduct && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </section>
  );
}

export default Products;
