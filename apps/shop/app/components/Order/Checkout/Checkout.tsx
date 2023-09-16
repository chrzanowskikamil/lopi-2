'use client';

import style from './Checkout.module.scss';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CheckoutForm } from './components/CheckoutForm/CheckoutForm';
import { CheckoutSummary } from './components/CheckoutSummary/CheckoutSummary';

export const Checkout: FC = () => {
  return (
    <Container className={style.checkoutContainer}>
      <Row>
        <Col>
          <h1 className={style.title}>Finalizacja zamówienia</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CheckoutForm />
        </Col>
        <Col>
          <CheckoutSummary />
        </Col>
      </Row>
    </Container>
  );
};
