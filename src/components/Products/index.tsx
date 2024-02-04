import React from "react";
import productList from "../../data/productList.js";
import "./style.scss";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

function Products() {
  return (
    <section>
      <div className="products-container">
        {productList.map((product: Product) => (
          <div className="product-list" key={product.productName}>
            <img src={product.photo} alt={product.descriptionShort} />
            <p className="description">{product.descriptionShort}</p>
            <p className="original-price">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>
            <p className="price">R$ {product.price.toLocaleString("pt-BR")}</p>
            <p className="half-price">
              ou 2x de R$ {(product.price * 0.5).toLocaleString("pt-BR")} sem
              juros
            </p>
            <span className="shipping">Frete grátis</span>
            <button>COMPRAR</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
