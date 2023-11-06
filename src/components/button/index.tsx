import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import './styles.css';


interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="button">
      <RiShoppingBag3Line />
      <p>{label}</p>
    </div>
  );
};

export default Button;
