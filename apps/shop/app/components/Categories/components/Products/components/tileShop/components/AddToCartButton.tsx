'use client';
import { useCart } from '../../../../../../../contexts/CartContext';
import style from '../tileShop.module.scss';
import { FC } from 'react';

interface AddToCartButtonProps {
  cartId: string;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ cartId }) => {
  const { addProduct } = useCart();

  return (
    <>
      <button
        onClick={() => addProduct(cartId, 1)}
        className={style.buttonToCart}
      >
        add to cart
      </button>
    </>
  );
};
