import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';

import ProductTileCol from './components/tileShop/ProductTileCol';
import { Product } from '../../../../shop/types/ProductsResponse';

interface ProductsDisplayProps {
  onProductsDisplay: {
    lowerMoneyValueFilter: number;
    higherMoneyValueFilter: number;
    availability: boolean;
    allProducts: Product[];
  };
}

export const ProductsDisplay: FC<ProductsDisplayProps> = ({
  onProductsDisplay,
}) => {
  const filterPriceLow = onProductsDisplay.lowerMoneyValueFilter;
  const filterPriceHight = onProductsDisplay.higherMoneyValueFilter;
  const availible = onProductsDisplay.availability;

  const sortBySearchParams = () => {
    const productArray = [...onProductsDisplay.allProducts];

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
