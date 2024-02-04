import React, { useEffect, useState } from "react";
import axios from "axios";

interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Products: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        setProdutos(response.data.products);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div>
        {produtos.map((produto, index) => (
          <div key={index}>
            <h2>{produto.productName}</h2>
            <p>Preço: R$ {produto.price.toFixed(2)}</p>
            <p>Descrição: {produto.descriptionShort}</p>
            <img
              src={produto.photo}
              alt={produto.productName}
              style={{ maxWidth: "200px" }}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
