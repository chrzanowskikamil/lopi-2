'use client';
import style from './CartMenu.module.scss';
import { Container } from 'react-bootstrap';
import { FC } from 'react';
import { useCart } from 'apps/shop/app/context/CartContext';

interface CartMenuProps {
  productId: number;
}

export const CartMenu: FC<CartMenuProps> = ({ productId }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    getQuantityForProduct,
  } = useCart();

  const quantity = getQuantityForProduct(productId);

  return (
    <Container className={style.menu}>
      <button onClick={() => deleteProduct(productId)}>X</button>
      <p>{quantity}</p>
      <button onClick={() => increaseQuantity(productId)}>+</button>
      <button onClick={() => decreaseQuantity(productId)}>-</button>
    </Container>
  );
};
