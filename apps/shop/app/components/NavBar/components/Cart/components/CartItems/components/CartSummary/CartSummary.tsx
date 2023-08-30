import style from './CartSummary.module.scss';
import { useCart } from '../../../../../../../../contexts/CartContext';

export const CartSummary = () => {
  const { totalPrice, deliveryPrice, totalCost } = useCart();

  return (
    <footer className={style.footer}>
      <p>Suma: {totalPrice} PLN</p>
      <p>Dostawa: {deliveryPrice} PLN</p>
      <p>Razem: {totalCost} PLN</p>
      <button>Przejdź do podsumowania</button>
    </footer>
  );
};
