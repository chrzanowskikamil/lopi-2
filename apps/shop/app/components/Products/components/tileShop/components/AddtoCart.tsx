'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';
import { useCart } from '../../../../../contexts/CartContext';

interface AddToCartProps {
  productUid: string;
  children?: string;
  customClassName?: string;
}

const AddToCart: FC<AddToCartProps> = ({
  productUid,
  children = 'addtocart',
  customClassName,
}) => {
  const { addProduct } = useCart();

  return (
    <>
      <button
        onClick={() => addProduct(productUid, 1)}
        className={customClassName ? customClassName : style.buttonToCart}
      >
        {children}
      </button>
    </>
  );
};

export default AddToCart;
