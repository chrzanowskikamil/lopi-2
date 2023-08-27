import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { ProductsResponse } from '../../../../../types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';
import { products } from './components/tileShop/products';

interface ProductsProps {
  products: ProductsResponse;
  priceToFilterByLow: number;
  priceToFilterByHigh: number;
  availabilityToFilterBy: boolean;
}

export const Products: FC<ProductsProps> = () => {
  const renderedProducts = products.map((product) => {
    return (
      <ProductTile
        key={product.uid}
        sku={product.sku}
        name={product.name}
        imageUrls={product.imageUrls}
        regularPrice={product.regularPrice}
        discountPrice={product.discountPrice}
      />
    );
  });

  return (
    <>
      {sorting}
      <Container>
        {isClient ? (
          <Row className={styles.products}>{...renderedProducts}</Row>
        ) : (
          <Row className={styles.products}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        )}
      </Container>
    </>
  );
};

// 'Cena rosnąca',
// 'Cena malejąca',
// 'Alfabetycznie A do Z',
// 'Alfabetycznie Z do A',
// 'Od najnowszych do najstarszych',
// 'Od najstarszych do najnowszych',
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
