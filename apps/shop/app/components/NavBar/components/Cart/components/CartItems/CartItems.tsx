'use client';
import style from './CartItems.module.scss';
import { Container } from 'react-bootstrap';
import { CartProduct } from './components/CartProduct/CartProduct';
import { CartSummary } from './components/CartSummary/CartSummary';
import { FC } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemsProps {
  products: Product[];
}

export const CartItems: FC<CartItemsProps> = ({ products }) => {
  return (
    <Container className={style.body}>
      <h1 className={style.title}>Twój koszyk</h1>
      <CartProduct products={products} />
      <CartSummary />
    </Container>
  );
};
