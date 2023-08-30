import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from 'apps/shop/types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';

import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useSearchParams } from 'next/navigation';
interface ProductsProps {
  products: ProductsResponse;
}

export const Products: FC<ProductsProps> = ({ products }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const searchParams = useSearchParams();

  const filterPriceLow = searchParams.get('filterPriceLow');
  const filterPriceHight = searchParams.get('filterPriceHight');
  const availible = searchParams.get('availability');

  const sortBySearchParams = () => {
    const table = [...products.products];
    console.table(table);

    if (filterPriceLow !== null) {
      table.forEach((el, index) => {
        if (
          (el.discountPrice !== undefined
            ? el.discountPrice
            : el.regularPrice) >= parseInt(filterPriceLow)
        ) {
          return;
        } else return table.splice(index, 1);
      });
    }

    if (filterPriceHight !== null) {
      table.forEach((el, index) => {
        if (
          (el.discountPrice !== undefined
            ? el.discountPrice
            : el.regularPrice) <= parseInt(filterPriceHight)
        ) {
          return;
        } else return table.splice(index, 1);
      });
    }

    if (availible === null || availible === 'true') {
      console.table('null lub true' + table);
      table.forEach((el, index) => {
        console.log(typeof el.quantity);
        if (el.quantity > 0) {
          return;
        } else {
          return table.splice(index, 1);
        }
      });
    } else if (availible === 'false') {
      console.table('false' + table);

      table.forEach((el, index) => {
        console.log(typeof el.quantity);
        if (el.quantity <= 0) {
          return;
        } else {
          return table.splice(index, 1);
        }
      });
    }

    return console.table(table), table;
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
