'use client';

import style from './productsDetailed.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumbs } from '../../Categories/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import Price from '../components/tileShop/components/Price';
import ProductRating from './components/ProductRating';
import { QuantityController } from '../../Cart/components/CartItems/components/CartProduct/components/QuantityController/QuantityController';
import AddToCart from '../components/tileShop/components/AddtoCart';
import { IconWrapper } from '../../Icons/IconWrapper';

export const ProductsDetailed = ({ product }: any) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={style.breadcrumbs}>
            <Breadcrumbs
              category={
                product.categories[0] !== undefined
                  ? product.categories[0].name
                  : 'No data'
              }
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Image
            src={
              product.imageUrls[0] !== undefined
                ? product.imageUrls[0].imageUrl
                : 'https://storage.googleapis.com/download/storage/v1/b/lopi-2-dev.appspot.com/o/images%2F13018714-7a1c-4708-ba39-004c5121678a.png?generation=1692295691288884&alt=media'
            }
            width={300}
            height={300}
            alt="picture"
            className={style.detailsImage}
          />
        </Col>
        <Col xl={6}>
          <Container>
            <div className={style.productName}>{product.name}</div>
            <div className={style.productPrice}>
              <Price
                price={product.regularPrice}
                currentPrice={product.discountPrice}
              />
            </div>
            <div className={style.productRating}>
              <ProductRating starsCount={4} />
              <div className={style.productOpinions}>
                <span>5 opini</span>
              </div>
            </div>
            <div className={style.productDescription}>
              {product.description}
            </div>
            <div className={style.cartInteraction}>
              <QuantityController
                productId={product.uid}
                customClassName={style.productDetailsQuantityController}
              />
              <AddToCart
                productUid={product.uid}
                customClassName={style.productDetailsAddToCartButton}
              >
                Dodaj do koszyka
              </AddToCart>
            </div>
            <div className={style.detailsIconsArea}>
              <div className={style.detailsIconsHeart}>
                <IconWrapper
                  icon={<i className="bi bi-heart"></i>}
                  className={style.detailsIcon}
                />
              </div>
              <div className={style.detailsIconsSocials}>
                <IconWrapper
                  icon={
                    <i className={`${style.detailsIcon} bi bi-envelope`}></i>
                  }
                />
                <IconWrapper
                  icon={
                    <i className={`${style.detailsIcon} bi bi-facebook`}></i>
                  }
                />
                <IconWrapper
                  icon={
                    <i className={`${style.detailsIcon} bi bi-instagram`}></i>
                  }
                />
                <IconWrapper
                  icon={
                    <i className={`${style.detailsIcon} bi bi-twitter`}></i>
                  }
                />
              </div>
            </div>
            <div className={style.categories}>
              <div className={style.categoryIntro}>Kategorie:</div>
              <div className={style.categoryName}>
                {product.categories[0] !== undefined
                  ? product.categories[0].name
                  : 'No data'}
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      {JSON.stringify(product)}
    </Container>
  );
};
