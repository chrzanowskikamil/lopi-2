'use client';

import style from './OrderConfirmation.module.scss';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconWrapper } from '../../Icons/IconWrapper';
import { OrderDetails } from './components/OrderDetails/OrderDetails';
import { OrderSummary } from '../OrderSummary/OrderSummary';

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
