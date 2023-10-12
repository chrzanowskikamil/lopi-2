'use client';

import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import { Product } from '../../../../../../../types/ProductsResponse';
import ProductTileCol from '../../../../../Products/components/tileShop/ProductTileCol';

type MostPurchasedListTypes = {
  productList: Product[];
};

const MostPurchasedList: FC<MostPurchasedListTypes> = ({ productList }) => {
  const preparedProductList = () => {
    const pickedProductList = [];
    for (let i = 0; i <= 3; i++) {
      pickedProductList.push(productList[i]);
    }

    return pickedProductList;
  };

  const products = preparedProductList().map((product) => {
    return <ProductTileCol col={4} product={product} key={product.uid} />;
  });

  return (
    <>
      <Container>
        <Row>{products}</Row>
      </Container>
    </>
  );
};

export default MostPurchasedList;
