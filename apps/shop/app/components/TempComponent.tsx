'use client';

import { Col, Container, Row } from 'react-bootstrap';

export const TempComponent = () => {
  const addToCart = () => {
    console.log('add to cart');
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}cart?productUuid=b5fba84e-1729-4d99-8412-8421d44a2a85&quantity=1`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );
  };

  const getCart = async () => {
    console.log('get cart');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}cart`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await res.json();
    console.log('body ', data);
  };

  return (
    <Container className={' w-100 '}>
      <Row>
        <Col>
          <button onClick={() => addToCart()}>add product</button>
        </Col>
        <Col>
          <button onClick={() => getCart()}>get cart</button>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            Koszyk:
            <div>asd</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
