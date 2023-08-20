'use client';
import style from './CartProduct.module.scss';
import { Container } from 'react-bootstrap';
import { CartMenu } from './CartMenu/CartMenu';
import { FC, Fragment } from 'react';
import { useCart } from 'apps/shop/app/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartProductProps {
  products: Product[];
}

export const CartProduct: FC<CartProductProps> = ({ products }) => {
  const { getQuantityForProduct } = useCart();
  const productsList = products.map((product) => (
    <Fragment key={product.id}>
      <Container className={style.product}>
        <img src="https://via.placeholder.com/64" alt="Picture of the author" />
        <p>{product.name}</p>
        <p>{product.price * getQuantityForProduct(product.id)} PLN</p>
      </Container>
      <CartMenu productId={product.id} />
    </Fragment>
  ));
  return (
    <>
      <Container className={style.products}>{productsList}</Container>
    </>
  );
};
