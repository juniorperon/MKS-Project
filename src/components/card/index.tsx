import Button from '../button'
import React  from "react";
import styled from "styled-components";

interface ProductCardProps {
  name: string;
  brand:string;
  price: number;
  description: string;
  imageUrl: string;
  handleBuyClick: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ brand,name, price, description, imageUrl,handleBuyClick }) => {
  return (
    <Product >
      <Image src={imageUrl} alt={brand + name} />
      <Title>


      <TitleName>{brand + " " +name}</TitleName>
      <Price className='price'>${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
      </Title>
      <Description className='description'>{description}</Description>
      <Button label="COMPRAR"  onClick={handleBuyClick}/>
    </Product>
  );
};

const Product = styled.div`
  box-shadow: 0px 2px 8px 0px #00000022;
    width: 218px;
    margin: 1%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`;

const Image = styled.img`
    width: 80%;
    display: flex;
    align-self: center;
`;

const Title = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
`;

const TitleName = styled.p`
     font-size: 16px;
    font-weight: 400;
`;

const Price = styled.p`
      background-color: #000;
    color: #FFF;
    padding: 10px;
    font-weight: 700;
    margin-right: 5%;
    border-radius: 5px;
`;

const Description = styled.p`
   width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    color: #2C2C2C;
    font-size: 10px;
`;

export default ProductCard;
