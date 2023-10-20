'use client';

import { Carousel, Container, Row } from 'react-bootstrap';
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

  const productsBigScreen = preparedProductList().map((product, i) => {
    return (
      <ProductTileCol col={4} product={product} key={product.uid} index={i} />
    );
  });

  const productsCarousel = preparedProductList().map((product, i) => {
    return (
      <Carousel.Item key={i}>
        <ProductTileCol
          index={i}
          col={4}
          product={product}
          key={product.uid}
          className={style.productCarousel}
        />
      </Carousel.Item>
    );
  });

  return (
    <Container className={style.mostPurchaseedList}>
      {/* FOR BIG SCREENS */}
      <Row className="d-none  d-md-flex ">{productsBigScreen}</Row>

      {/* FOR SMALL SCREEN */}
      <Row className="d-flex  d-md-none">
        <Carousel
          indicators={false}
          touch={true}
          bsPrefix={style.carousel}
          nextIcon={
            <i
              className={`${style.carouselArrow} bi bi-arrow-right-circle`}
            ></i>
          }
          prevIcon={
            <i className={`${style.carouselArrow} bi bi-arrow-left-circle`}></i>
          }
        >
          {productsCarousel}
        </Carousel>
      </Row>
    </Container>
  );
};

export default MostPurchasedList;
