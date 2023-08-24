import styles from './Products.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from 'apps/shop/types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';
import { products } from './components/tileShop/products';

interface ProductsProps {
  products: ProductsResponse;
}

export const Products: FC<ProductsProps> = () => {
  const renderedProducts = products.map((product) => {
    return (
      <Col className={styles.product} xl={4} key={product.id}>
        <ProductTile
          picture={product.picture}
          name={product.name}
          price={product.price}
          currentPrice={product.currentPrice}
          status={product.status}
          stars={product.stars}
        />
      </Col>
    );
  });

  return (
    <>
      <Container>
        <Row className={styles.products}>{...renderedProducts}</Row>
      </Container>
    </>
  );
};
