import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <BuyButton onClick={onClick}>
      <RiShoppingBag3Line />
      <p>{label}</p>
    </BuyButton>
  );
};

const BuyButton = styled.div`
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  font-size: 14px;
  color: #fff;
  flex: 1;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`;

export default Button;
