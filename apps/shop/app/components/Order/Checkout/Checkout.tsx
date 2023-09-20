'use client';

import style from './Checkout.module.scss';
import { FC } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { CheckoutForm } from './CheckoutForm/CheckoutForm';
import { CheckoutSummary } from './components/CheckoutSummary/CheckoutSummary';
import { useCheckoutForm } from './CheckoutForm/useCheckoutForm';

export const Checkout: FC = () => {
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
            <CheckoutSummary formik={formik} />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
