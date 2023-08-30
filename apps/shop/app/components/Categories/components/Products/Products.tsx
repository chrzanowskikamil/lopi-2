import styles from './Products.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from '../../../../../types/ProductsResponse';
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
          // TODO: handle that
          // currentPrice={product.currentPrice}
          currentPrice={100}
          // status={product.status}
          status={'test'}
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
