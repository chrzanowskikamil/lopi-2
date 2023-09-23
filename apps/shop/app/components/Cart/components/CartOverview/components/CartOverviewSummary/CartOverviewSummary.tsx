import style from './CartOverviewSummary.module.scss';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { useCart } from '../../../../../../contexts/CartContext';

export const CartOverviewSummary = () => {
  const { totalPrice, deliveryPrice, totalCost } = useCart();

  return (
    <Container className={style.summary}>
      <h2>Podsumowanie</h2>
      <p>
        Suma <span>{totalPrice.toFixed(2)} zł</span>
      </p>
      <p>
        dostawa <span>{deliveryPrice} zł</span>
      </p>
      <div className={style.total}>
        <p>
          Razem <span>{totalCost.toFixed(2)} PLN</span>
        </p>
        <Link href={'/checkout'}>Przejdz do finalizacji zamowienia</Link>
      </div>
    </Container>
  );
};
