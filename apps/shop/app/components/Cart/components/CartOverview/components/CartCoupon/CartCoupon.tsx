import { Container } from 'react-bootstrap';
import style from './CartCoupon.module.scss';

export const CartCoupon = () => {
  return (
    <Container className={style.cartCoupon}>
      <div className={style.cartInput}>
        <label>kod rabatowy</label>
        <input />
      </div>
      <button>Dodaj kupon</button>
    </Container>
  );
};
