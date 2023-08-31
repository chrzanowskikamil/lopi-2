import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { ProductsResponse } from '../../../../../types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';

import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useSearchParams } from 'next/navigation';
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

    if (filterPriceHight !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (
          (table[i].discountPrice !== null
            ? table[i].discountPrice
            : table[i].regularPrice) >= parseInt(filterPriceHight)
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
            : table[i].regularPrice) < parseInt(filterPriceLow)
        ) {
          table.splice(i, 1);
        }
      }
    }

    if (availible !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (availible === 'true') {
          if (table[i].status !== 'ACTIVE') {
            table.splice(i, 1);
          }
        }
        if (availible === 'false') {
          if (table[i].status === 'ACTIVE') {
            table.splice(i, 1);
          }
        }
      }
    }

    return console.table(table), table;
  };

  const renderedProducts = sortBySearchParams().map((product) => {
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

    if (filterPriceHight !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (
          (table[i].discountPrice !== null
            ? table[i].discountPrice
            : table[i].regularPrice) >= parseInt(filterPriceHight)
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
            : table[i].regularPrice) < parseInt(filterPriceLow)
        ) {
          table.splice(i, 1);
        }
      }
    }

    if (availible !== null) {
      for (let i = table.length - 1; i >= 0; i -= 1) {
        if (availible === 'true') {
          if (table[i].status !== 'ACTIVE') {
            table.splice(i, 1);
          }
        }
        if (availible === 'false') {
          if (table[i].status === 'ACTIVE') {
            table.splice(i, 1);
          }
        }
      }
    }

    return console.table(table), table;
  };

  const renderedProducts = sortBySearchParams().map((product) => {
    return (
      <ProductTile
        key={product.uid}
        sku={product.sku}
        name={product.name}
        imagesUrls={product.imagesUrls}
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
// if (filterPriceHight !== null) {
//   table.forEach((el, index) => {
//     if (
//       (el.discountPrice !== null ? el.discountPrice : el.regularPrice) <=
//       parseInt(filterPriceHight)
//     ) {
//       return;
//     } else return table.splice(index, 1);
//   });
// }

// if (filterPriceLow !== null) {
//   table.forEach((el, index) => {
//     if (
//       (el.discountPrice !== null ? el.discountPrice : el.regularPrice) >=
//       parseInt(filterPriceLow)
//     ) {
//       return;
//     } else return table.splice(index, 1);
//   });
// }

// if (filterPriceLow !== null) {
//   if (availible === null || availible == 'true') {
//     table.forEach((el, index) => {
//       if (el.status == 'ACTIVE') {
//         return table.splice(index, 1);
//       } else {
//         return;
//       }
//     });
//   } else if (availible == 'false') {
//     table.forEach((el, index) => {
//       if (el.status == 'ACTIVE') {
//         return;
//       } else {
//         return table.splice(index, 1);
//       }
//     });
//   }
// }
// if (filterPriceHight !== null) {
//   table.forEach((el, index) => {
//     if (
//       (el.discountPrice !== null ? el.discountPrice : el.regularPrice) <=
//       parseInt(filterPriceHight)
//     ) {
//       return;
//     } else return table.splice(index, 1);
//   });
// }

// if (filterPriceLow !== null) {
//   table.forEach((el, index) => {
//     if (
//       (el.discountPrice !== null ? el.discountPrice : el.regularPrice) >=
//       parseInt(filterPriceLow)
//     ) {
//       return;
//     } else return table.splice(index, 1);
//   });
// }

// if (filterPriceLow !== null) {
//   if (availible === null || availible == 'true') {
//     table.forEach((el, index) => {
//       if (el.status == 'ACTIVE') {
//         return table.splice(index, 1);
//       } else {
//         return;
//       }
//     });
//   } else if (availible == 'false') {
//     table.forEach((el, index) => {
//       if (el.status == 'ACTIVE') {
//         return;
//       } else {
//         return table.splice(index, 1);
//       }
//     });
//   }
// }
