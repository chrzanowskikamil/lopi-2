'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';
import { useCart } from '../../../../../contexts/CartContext';

interface AddToCartProps {
  productUid: string;
}

const AddToCart: FC<AddToCartProps> = ({ productUid }) => {
  const { addProduct } = useCart();

  return (
    <>
      <button
        onClick={() => addProduct(productUid, 1)}
        className={style.buttonToCart}
      >
        add to cart
      </button>
    </>
  );
};

export default AddToCart;
