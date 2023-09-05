import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';

import ProductTile from './components/tileShop/productTile';

import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { CategoriesReducerProps } from '../../CategoriesReducerHook';

interface ProductsProps {
  categoriesReducer: CategoriesReducerProps;
}

export const Products: FC<ProductsProps> = ({ categoriesReducer }) => {
  const [isClient, setIsClient] = useState<boolean>();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const filterPriceLow = categoriesReducer.state.lowerMoneyValueFilter;
  const filterPriceHight = categoriesReducer.state.higherMoneyValueFilter;
  const availible = categoriesReducer.state.availability;

  const sortBySearchParams = () => {
    const table = [...categoriesReducer.state.allProducts];

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
