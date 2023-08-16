import { Col, Container, Row } from 'react-bootstrap';
import styles from '../Categories.module.scss';
import { FC } from 'react';

interface ProductsProps {
  product: string;
}

export const Products: FC<ProductsProps> = () => {
  return (
    <>
      <Container>
        <Row xs="3" className={styles.products}>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
          <Col className={styles.product}>
            <img src="https://via.placeholder.com/330" alt="product" />
            <p>Product name</p>
            <p>Product description</p>
            <p>Price</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
