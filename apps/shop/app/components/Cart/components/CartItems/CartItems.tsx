import style from './CartItems.module.scss';
import { FC } from 'react';
import Link from 'next/link';
import { CartProduct } from './components/CartProduct/CartProduct';
import { CartSummary } from './components/CartSummary/CartSummary';

interface CartItemsProps {
  handleClose: VoidFunction;
}

export const CartItems: FC<CartItemsProps> = ({ handleClose }) => {
  return (
    <div className={style.cartItems}>
      <p className={style.title}>Twój koszyk</p>
      <CartProduct />
      <CartSummary />
      <Link className={style.link} onClick={handleClose} href={'/cart'}>
        Przejdź do podsumowania
      </Link>
    </div>
  );
};
