import style from './CheckoutSummary.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import { OrderSummary } from '../../../OrderSummary/OrderSummary';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';

export const CheckoutSummary: FC = () => {
  return (
    <div className={style.summaryContainer}>
      <OrderSummary />
      <PaymentMethods />
      <Link href={'/order-confirmation'}>Złóż zamówienie</Link>
    </div>
  );
};
