import { Col, Container, Row } from 'react-bootstrap';
import styles from '../Categories.module.scss';
import { FC } from 'react';

interface ProductsProps {
  product: string;
  visibleProducts: [];
}

export const Products: FC<ProductsProps> = ({ visibleProducts }) => {
  return (
    <>
      <Container>
        <Row xs="3" className={styles.products}>
          {visibleProducts.map((product, id) => (
            <Col className={styles.product} key={product.id}>
              <img src="https://via.placeholder.com/330" alt="product" />
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Col>
          ))}
          ;
        </Row>
      </Container>
    </>
  );
};
