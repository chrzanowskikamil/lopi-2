import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';

import ProductTileCol from './components/tileShop/ProductTileCol';

import { ProductsDisplayProps } from './ProductTypesProps';

export const ProductsDisplay: FC<ProductsDisplayProps> = ({
  categoriesReducer,
}) => {
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

      const priceInFilterRange =
        (!!filterPriceLow && price < filterPriceLow) ||
        (!!filterPriceHight && price >= filterPriceHight);

      const availabilityInFilterRange =
        (availible && product.status !== 'ACTIVE') ||
        (!availible && product.status === 'ACTIVE');

      if (priceInFilterRange) {
        return false;
      }
      if (availabilityInFilterRange) {
        return false;
      }

      return true;
    });

    return filteredProducts;
  };

  const renderedProducts = sortBySearchParams().map((product) => {
    return (
      <ProductTileCol
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
        <Row className={styles.products}>{...renderedProducts}</Row>
      </Container>
    </>
  );
};
