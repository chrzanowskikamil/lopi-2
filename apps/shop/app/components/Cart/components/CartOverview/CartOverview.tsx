'use client';
import style from './CartOverview.module.scss';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { CartProductsList } from './components/CartProductsList/CartProductsList';
import { CartOverviewSummary } from './components/CartOverviewSummary/CartOverviewSummary';
import { CartCoupon } from './components/CartCoupon/CartCoupon';

export const CartOverview: FC = () => (
  <Container className={style.main}>
    <h1>Koszyk</h1>
    <div className={style.section}>
      <div>
        <CartProductsList />
        <CartCoupon />
      </div>
      <CartOverviewSummary />
    </div>
  </Container>
);
