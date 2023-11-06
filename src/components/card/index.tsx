import './styles.css';
import Button from '../button'
import React , { useState} from "react";


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
    <div className="product-card">
      <img src={imageUrl} alt={brand + name} className='image' />
      <div className='title'>
        <div>


      <p className='titleName'>{brand + " " +name}</p>
        </div>
      <p className='price'>${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <p className='description'>{description}</p>
      <Button label="COMPRAR"  onClick={handleBuyClick}/>
    </div>
  );
};

export default ProductCard;
