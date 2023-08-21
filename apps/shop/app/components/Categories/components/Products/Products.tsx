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
      <ProductTile
        key={product.id}
        picture={product.picture}
        name={product.name}
        price={product.price}
        currentPrice={product.currentPrice}
        status={product.status}
        stars={product.stars}
      />
    );
  });

  return (
    <>
      <Container>
        <Col>
          <Row className={styles.products}>{...renderedProducts}</Row>
        </Col>
      </Container>
    </>
  );
};
