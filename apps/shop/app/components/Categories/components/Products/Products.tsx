import styles from './Products.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from 'apps/shop/types/ProductsResponse';

interface ProductsProps {
  products: ProductsResponse;
}

export const Products: FC<ProductsProps> = ({ products: productsData }) => {
  const renderedProducts = productsData.products.map((product) => (
    //INFO: This is the place where we will put the product component from task L01-61
    //INFO: Code below is just a mock, but data is fetched from API.
    <Col md={4} className={styles.product} key={product.name}>
      <img src="https://via.placeholder.com/330" alt="product" />
      <p>{product.name}</p>
      <p>{product.regularPrice}</p>
      <p>{product.discountPrice}</p>
    </Col>
  ));
  return (
    <>
      <Container>
        <Row className={styles.products}>{renderedProducts}</Row>
      </Container>
    </>
  );
};
