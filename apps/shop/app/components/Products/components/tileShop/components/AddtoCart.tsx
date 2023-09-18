'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';
import { useCart } from '../../../../../contexts/CartContext';

interface AddToCartProps {
  productUid: string;
  buttonText?: string;
  className?: string;
}

const AddToCart: FC<AddToCartProps> = ({
  productUid,
  buttonText = 'addtocart',
  className,
}) => {
  const { addProduct } = useCart();

  return (
    <>
      <button
        onClick={() => addProduct(productUid, 1)}
        className={`${style.buttonToCart} ${className ? className : ''}`}
      >
        {buttonText}
      </button>
    </>
  );
};

export default AddToCart;
