'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { IconWrapper } from '../../Icons/IconWrapper';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderSummary } from '../OrderSummary/OrderSummary';
import style from './OrderConfirmation.module.scss';

export const OrderConfirmation: FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col className={style.titleContainer}>
          <h1 className={style.title}>
            <IconWrapper icon={<i className="bi bi-check"></i>} />
            Dziękujemy za złożożenie zamówienia
          </h1>
        </Col>
      </Row>
      <Row className={style.orderContainer}>
        <Col>
          <OrderDetails />
        </Col>
        <Col>
          <h2>Podsumowanie Zamówienia</h2>
          <div className={style.summaryContainer}>
            <OrderSummary />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
