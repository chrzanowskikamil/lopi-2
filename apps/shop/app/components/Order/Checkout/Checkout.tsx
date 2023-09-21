'use client';

import style from './Checkout.module.scss';
import { FC } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { CheckoutForm } from './CheckoutForm/CheckoutForm';
import { CheckoutSummary } from './components/CheckoutSummary/CheckoutSummary';
import { useCheckoutForm } from './CheckoutForm/useCheckoutForm';
import { PaymentMethodResponse } from '../../../../types/PaymentMethodResponse';
interface CheckoutProps {
  paymentMethod: PaymentMethodResponse;
}

export const Checkout: FC<CheckoutProps> = ({ paymentMethod }) => {
  const formik = useCheckoutForm();

  return (
    <Container className={style.checkoutContainer}>
      <Form className={style.formContainer} onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
            <h1 className={style.title}>Finalizacja zamówienia</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckoutForm formik={formik} />
          </Col>
          <Col>
            <CheckoutSummary formik={formik} paymentMethod={paymentMethod} />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
