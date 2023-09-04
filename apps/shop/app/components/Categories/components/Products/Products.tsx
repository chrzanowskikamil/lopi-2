import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { ProductsResponse } from '../../../../../types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';

import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface ProductsProps {
  products: ProductsResponse;
  priceToFilterByLow: number;
  priceToFilterByHigh: number;
  availabilityToFilterBy: boolean;
}

export const Products: FC<ProductsProps> = ({
  products,
  priceToFilterByLow,
  priceToFilterByHigh,
  availabilityToFilterBy,
}) => {
  const [isClient, setIsClient] = useState<boolean>();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const filterPriceLow = priceToFilterByLow;
  const filterPriceHight = priceToFilterByHigh;
  const availible = availabilityToFilterBy;

  const sortBySearchParams = () => {
    console.log(products);
    const table = [...(products !== undefined ? products : [])];

    if (filterPriceHight !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (
          (table[i].discountPrice !== null
            ? table[i].discountPrice
            : table[i].regularPrice) >= filterPriceHight
        ) {
          table.splice(i, 1);
        }
      }
    }

    if (filterPriceLow !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (
          (table[i].discountPrice !== null
            ? table[i].discountPrice
            : table[i].regularPrice) < filterPriceLow
        ) {
          table.splice(i, 1);
        }
      }
    }

    if (availible !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (availible === true) {
          if (table[i].status !== 'ACTIVE') {
            table.splice(i, 1);
          }
        }
        if (availible === false) {
          if (table[i].status === 'ACTIVE') {
            table.splice(i, 1);
          }
        }
      }
    }

    return table;
  };

  const renderedProducts = sortBySearchParams().map((product) => {
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
