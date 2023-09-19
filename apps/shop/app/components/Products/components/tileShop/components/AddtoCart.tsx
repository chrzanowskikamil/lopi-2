'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';
import { useCart } from '../../../../../contexts/CartContext';

interface AddToCartProps {
  productUid: string;
  buttonText?: string;
  className?: string;
  productCount?: number;
  onClick?: () => void;
  disabled?: boolean;
}

const AddToCart: FC<AddToCartProps> = ({
  productUid,
  buttonText = 'addtocart',
  className,
  productCount = 1,
  onClick,
  disabled = false,
}) => {
  const { addProduct } = useCart();

  return (
    <>
      <button
        onClick={() => {
          addProduct(productUid, productCount);
          if (onClick) {
            onClick();
          }
        }}
        className={`${style.buttonToCart} ${className ? className : ''}`}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
};

export default AddToCart;
