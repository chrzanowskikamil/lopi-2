'use client';

import style from './CartOverviewSummary.module.scss';
import { Button } from '@lopi-2/common';
import { Container } from 'react-bootstrap';
import { useCart } from '../../../../../../contexts/CartContext';
import { useRouter } from 'next/navigation';

export const CartOverviewSummary = () => {
  const { totalPrice, totalCost, cartData } = useCart();
  const router = useRouter();

  const isCartEmpty = !cartData?.cartItems.length;

  const handleClick = () => {
    if (isCartEmpty) return;

    router.push('/checkout');
  };

  return (
    <Container className={style.summary}>
      <h2>Podsumowanie</h2>
      <p>
        Suma <span>{totalPrice.toFixed(2)} zł</span>
      </p>
      <div className={style.total}>
        <p>
          Razem <span>{totalCost.toFixed(2)} PLN</span>
        </p>
        <Button
          title="Przejdź do finalizacji zamówienia"
          disabled={isCartEmpty}
          onClick={handleClick}
        />
      </div>
    </Container>
  );
};
