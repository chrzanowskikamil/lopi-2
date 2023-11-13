'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { CartCoupon } from './components/CartCoupon/CartCoupon';
import { CartOverviewSummary } from './components/CartOverviewSummary/CartOverviewSummary';
import { CartProductsList } from './components/CartProductsList/CartProductsList';
import { FC } from 'react';
import style from './CartOverview.module.scss';

export const CartOverview: FC = () => (
  <Container className={style.main}>
    <h1>Koszyk</h1>
    <div className={style.section}>
      <Row>
        <Col lg="6">
          <div className="d-flex flex-column h-100">
            <CartProductsList />
            <CartCoupon />
          </div>
        </Col>
        <Col lg="6">
          <CartOverviewSummary />
        </Col>
      </Row>
    </div>
  </Container>
);
