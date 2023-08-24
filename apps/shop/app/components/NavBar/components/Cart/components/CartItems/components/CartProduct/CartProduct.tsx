'use client';
import style from './CartProduct.module.scss';
import { Container } from 'react-bootstrap';
import { CartMenu } from './CartMenu/CartMenu';
import { FC, Fragment } from 'react';
import { useCart } from 'apps/shop/app/contexts/CartContext';
import { ProductCart } from 'apps/shop/types/ProductCart';

interface CartProductProps {
  products: ProductCart[];
}

export const CartProduct: FC<CartProductProps> = ({ products }) => {
  const { getQuantityForProduct } = useCart();
  const productsList = products.map((product) => (
    <Fragment key={product.id}>
      <img src="https://via.placeholder.com/64" alt="Picture of the author" />
      <p>{product.name}</p>
      <p>{product.price * getQuantityForProduct(product.id)} PLN</p>
      <CartMenu productId={product.id} />
    </Fragment>
  ));
  return (
    <>
      <Container className={style.products}>{productsList}</Container>
    </>
  );
};
