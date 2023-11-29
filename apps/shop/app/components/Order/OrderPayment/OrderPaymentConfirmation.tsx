'use client';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../OrderConfirmation/OrderConfirmation.module.scss';
import { IconWrapper } from '../../Icons/IconWrapper';
import { CompletedPayment } from './components/CompletedPayment';
import { NewPayment } from './components/NewPayment';
import { useStatusPayment } from '../../../hooks/useStatusPayment';
import { InProgressPayment } from './components/InProgressPayment';
import { PaymentStatus } from './PaymentStatus';

export const OrderPaymentConfirmation: FC = () => {
  const { paymentStatus } = useStatusPayment();

  return (
    <Container fluid>
      <Row>
        <Col className={style.titleContainer}>
          <h1 className={style.title}>
            <IconWrapper icon={<i className="bi bi-check"></i>} />
            Płatność PayU
          </h1>
        </Col>
      </Row>
      <Row className={style.orderContainer}>
        <Col>
          <h2>Status płatności PayU</h2>
          {paymentStatus === PaymentStatus.COMPLETED && <CompletedPayment />}
          {paymentStatus === PaymentStatus.NEW && <NewPayment />}
          {paymentStatus !== PaymentStatus.COMPLETED && paymentStatus !== PaymentStatus.NEW && (
            <InProgressPayment />
          )}
        </Col>
      </Row>
    </Container>
  );
};
