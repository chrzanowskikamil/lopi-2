'use client';

import styles from './Products.module.scss';
import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { ProductsResponse } from '../../../../../types/ProductsResponse';
import ProductTile from './components/tileShop/productTile';
// import { products } from './components/tileShop/products';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useSearchParams } from 'next/navigation';
import { getProducts } from 'apps/shop/actions/getProducts';

interface ProductsProps {
  products: ProductsResponse;
  priceToFilterByLow: number;
  priceToFilterByHigh: number;
  availabilityToFilterBy: boolean;
}
const getData = async () => {
  const res = await getProducts();
  const data = res;

  return data;
};

export const Products: FC<ProductsProps> = async () => {
  const [isClient, setIsClient] = useState(false);
  const products = getData();
  console.log(products);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const searchParams = useSearchParams();
  const sorting = searchParams.get('sort');
  const filterPriceLow = searchParams.get('filterPriceLow');
  const filterPriceHight = searchParams.get('filterPriceHight');
  const availible = searchParams.get('availibilty');

  const renderedProducts = products.map((product) => {
    return (
      <ProductTile
        key={product.sku}
        sku={product.sku}
        name={product.name}
        imageUrl={product.imageUrls}
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

// const sortBySearchParams = () => {
//   table = getData;
//   if (sorting !== null) {
//     if (sorting === 'Cena rosnaca') {
//       table.sort(
//         (a, b) =>
//           (a.currentPrice !== undefined ? a.currentPrice : a.price) -
//           (b.currentPrice !== undefined ? b.currentPrice : b.price)
//       );
//     } else if (sorting === 'Cena malejaca') {
//       table.sort(
//         (a, b) =>
//           (b.currentPrice !== undefined ? b.currentPrice : b.price) -
//           (a.currentPrice !== undefined ? a.currentPrice : a.price)
//       );
//     } else if (sorting === 'Alfabetycznie A do Z') {
//       table.sort((a, b) => {
//         const fa = a.name.toLowerCase();
//         const fb = b.name.toLowerCase();
//         if (fa < fb) {
//           return -1;
//         }
//         if (fa > fb) {
//           return 1;
//         }

//         return 0;
//       });
//     } else if (sorting === 'Alfabetycznie Z do A') {
//       table.sort((a, b) => {
//         const fa = a.name.toLowerCase();
//         const fb = b.name.toLowerCase();
//         if (fa > fb) {
//           return -1;
//         }
//         if (fa < fb) {
//           return 1;
//         }

//         return 0;
//       });
//     }
//   }
//   if (filterPriceLow !== null) {
//     table.forEach((el, index) => {
//       if (
//         (el.currentPrice !== undefined ? el.currentPrice : el.price) >=
//         parseInt(filterPriceLow)
//       ) {
//         return;
//       } else return table.splice(index, 1);
//     });
//   }
//   if (filterPriceHight !== null) {
//     table.forEach((el, index) => {
//       if (
//         (el.currentPrice !== undefined ? el.currentPrice : el.price) <=
//         parseInt(filterPriceHight)
//       ) {
//         return;
//       } else return table.splice(index, 1);
//     });
//   }
//   if (availible !== null) {
//     // if (availiblity === 'true'){}
//     table.forEach((el, index) => {
//       if (el.availiblity === true) {
//         return;
//       } else return table.splice(index, 1);
//     });
//   }

//   return console.table(table), table;
// };

// 'Cena rosnąca',
// 'Cena malejąca',
// 'Alfabetycznie A do Z',
// 'Alfabetycznie Z do A',
// 'Od najnowszych do najstarszych',
// 'Od najstarszych do najnowszych',
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
// const sortProductsFromCheap = products
//     .slice()
//     .sort(
//       (a, b) =>
//         (a.currentPrice !== undefined ? a.currentPrice : a.price) -
//         (b.currentPrice !== undefined ? b.currentPrice : b.price)
//     );

//   const sortProductsFromExpensive = products
//     .slice()
//     .sort(
//       (a, b) =>
//         (b.currentPrice !== undefined ? b.currentPrice : b.price) -
//         (a.currentPrice !== undefined ? a.currentPrice : a.price)
//     );

//   const sortProductsFromAToZ = products.slice().sort((a, b) => {
//     const fa = a.name.toLowerCase();
//     const fb = b.name.toLowerCase();
//     if (fa < fb) {
//       return -1;
//     }
//     if (fa > fb) {
//       return 1;
//     }

//     return 0;
//   });

//   const sortProductsFromZToA = products.slice().sort((a, b) => {
//     const fa = a.name.toLowerCase();
//     const fb = b.name.toLowerCase();
//     if (fa > fb) {
//       return -1;
//     }
//     if (fa < fb) {
//       return 1;
//     }

//     return 0;
//   });

//   const currentSerach = () => {
//     if (sorting === null) {
//       return products;
//     } else if (sorting === 'Cena rosnaca') {
//       return sortProductsFromCheap;
//     } else if (sorting === 'Cena malejaca') {
//       return sortProductsFromExpensive;
//     } else if (sorting === 'Alfabetycznie A do Z') {
//       return sortProductsFromAToZ;
//     } else if (sorting === 'Alfabetycznie Z do A') {
//       return sortProductsFromZToA;
//     } else return [];
//   };
