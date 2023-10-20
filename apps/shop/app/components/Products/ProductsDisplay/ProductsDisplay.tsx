import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { Product } from '../../../../types/ProductsResponse';
import ProductTileCol from '../components/tileShop/ProductTileCol';
import style from './Products.module.scss';

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

      const productAvailiblityFilter =
        (availible && product.status !== 'ACTIVE') ||
        (!availible && product.status === 'ACTIVE');

      if (priceInFilterRange) {
        return false;
      }
      if (productAvailiblityFilter) {
        return false;
      }

      return true;
    });

    return filteredProducts;
  };

  const RenderedProducts = sortBySearchParams().map((product, i) => {
    return (
      <ProductTileCol
        col={4}
        product={product}
        key={product.uid}
        index={i}
        cartContextId={'Categories render.'}
      />
    );
  });

  return (
    <>
      <Container>
        <Row className={style.products}>{...RenderedProducts}</Row>
      </Container>
    </>
  );
};
