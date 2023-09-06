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
    const productArray = [...categoriesReducer.state.allProducts];

    const filteredProducts = productArray.filter((product) => {
      const price =
        product.discountPrice !== null
          ? product.discountPrice
          : product.regularPrice;

      if (
        (!!filterPriceLow && price < filterPriceLow) ||
        (!!filterPriceHight && price >= filterPriceHight)
      ) {
        return false;
      }

      if (availible !== null) {
        if (
          (availible && product.status !== 'ACTIVE') ||
          (!availible && product.status === 'ACTIVE')
        ) {
          return false;
        }
      }

      return true;
    });

    return filteredProducts;
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
