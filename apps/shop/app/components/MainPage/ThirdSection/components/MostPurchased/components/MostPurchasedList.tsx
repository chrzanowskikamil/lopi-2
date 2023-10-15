'use client';

import { Container, Row } from 'react-bootstrap';
import {
  ENDING_ON_NUMBER,
  STARTING_FROM_NUMBER,
} from '../MostPurchasedVariables';

import { FC } from 'react';
import { Product } from '../../../../../../../types/ProductsResponse';
import ProductTileCol from '../../../../../Products/components/tileShop/ProductTileCol';
import style from '../mostPurchased.module.scss';

type MostPurchasedListTypes = {
  productList: Product[];
};

const MostPurchasedList: FC<MostPurchasedListTypes> = ({ productList }) => {
  const preparedProductList = () => {
    const pickedProductList = [];
    for (let i = STARTING_FROM_NUMBER; i <= ENDING_ON_NUMBER; i++) {
      pickedProductList.push(productList[i]);
    }

    return pickedProductList;
  };

  const products = preparedProductList().map((product) => {
    return <ProductTileCol col={4} product={product} key={product.uid} />;
  });

  return (
    <Container className={style.mostPurchaseedList}>
      <Row>{products}</Row>
    </Container>
  );
};

export default MostPurchasedList;
