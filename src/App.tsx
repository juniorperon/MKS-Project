import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/card";
import { getProducts } from "./Api";
import { TiShoppingCart } from "react-icons/ti";
import styled from 'styled-components';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qtdProducts, setQtdProducts] = useState(0)


  const handleBuyClick = () => {
    setQtdProducts(qtdProducts+1)
  }


  useEffect(() => {
    getProducts()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h1 style={{fontSize:"40px"}}>MKS</h1>
          <p style={{fontSize:"20px"}}>Sistemas</p>
        </div>
        <div className="Purchase">
          <TiShoppingCart />
          <p>{qtdProducts}</p>
        </div>
      </header>
        <Products>
          {data.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              description={product.description}
              imageUrl={product.photo}
              handleBuyClick={handleBuyClick}
            />
          ))}
      </Products>
      <Footer >
        MKS sistemas © Todos os direitos reservados
      </Footer>
    </div>
  );
}

const Products = styled.div`
 display: flex;
    flex-wrap: wrap;
    padding: 5% 20% 5% 20%;
   
    border-radius: 20px;
    justify-content: center;
`;
const Footer = styled.div`
  background-color: #EEEEEE;
  color: #000;
  font-size:12px;
  font-weight:400;
  padding: 10px;
  text-align: center;
`;

export default App;
