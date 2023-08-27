import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from 'apps/shop/types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';
import { products } from './components/tileShop/products';

import { useSearchParams } from 'next/navigation';

interface ProductsProps {
  products: ProductsResponse;
}

export const Products: FC<ProductsProps> = () => {
  const searchParams = useSearchParams();
  const sorting = searchParams.get('sort');
  const filterPriceLow = searchParams.get('filterPriceLow');
  const filterPriceHight = searchParams.get('filterPriceHight');
  const availiblity = searchParams.get('availibilty');

  const sortProductsFromCheap = products
    .slice()
    .sort(
      (a, b) =>
        (a.currentPrice !== undefined ? a.currentPrice : a.price) -
        (b.currentPrice !== undefined ? b.currentPrice : b.price)
    );

  const sortProductsFromExpensive = products
    .slice()
    .sort(
      (a, b) =>
        (b.currentPrice !== undefined ? b.currentPrice : b.price) -
        (a.currentPrice !== undefined ? a.currentPrice : a.price)
    );

  const sortProductsFromAToZ = products.slice().sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }

    return 0;
  });

  const sortProductsFromZToA = products.slice().sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();
    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }

    return 0;
  });

  const currentSerach = () => {
    if (sorting === null) {
      return products;
    } else if (sorting === 'Cena rosnąca') {
      return sortProductsFromCheap;
    } else if (sorting === 'Cena malejąca') {
      return sortProductsFromExpensive;
    } else if (sorting === 'Alfabetycznie A do Z') {
      return sortProductsFromAToZ;
    } else if (sorting === 'Alfabetycznie Z do A') {
      return sortProductsFromZToA;
    } else return [];
  };

  const renderedProducts = currentSerach().map((product) => {
    return (
      <ProductTile
        key={product.id}
        id={product.id}
        rewievs={product.rewievs}
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
      {sorting}
      <Container>
        <Row className={styles.products}>{...renderedProducts}</Row>
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
