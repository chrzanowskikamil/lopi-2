'use client';

import { Carousel, Container, Row } from 'react-bootstrap';
import { FC } from 'react';
import { Product } from '../../../../../../../types/ProductsResponse';
import ProductTileCol from '../../../../../Products/components/tileShop/ProductTileCol';
import style from '../mostPurchased.module.scss';

type MostPurchasedListTypes = {
  productList: Product[];
};

const MostPurchasedList: FC<MostPurchasedListTypes> = ({ productList }) => {
  const productsBigScreen = productList.map((product, i) => {
    return (
      <ProductTileCol
        col={4}
        product={product}
        key={product.uid}
        index={i}
        cartContextId={'Products big screen.'}
      />
    );
  });

  const productsCarousel = productList.map((product, i) => {
    return (
      <Carousel.Item key={i}>
        <ProductTileCol
          index={i}
          col={4}
          product={product}
          key={product.uid}
          className={style.productCarousel}
          cartContextId={'Products carousel.'}
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
