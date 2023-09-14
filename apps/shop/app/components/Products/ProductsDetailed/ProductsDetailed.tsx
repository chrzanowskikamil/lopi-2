'use client';

import style from './productsDetailed.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumbs } from '../../Categories/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import Price from '../components/tileShop/components/Price';
import ProductRating from '../components/tileShop/components/ProductRating';

export const ProductsDetailed = ({ product }: any) => {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs category={'kategoria / brakuje danych z BE?'} />
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
          <div className={style.productName}>{product.name}</div>
          <Price
            price={product.regularPrice}
            currentPrice={product.discountPrice}
          />
          <div className={style.tileInfo}>
            <ProductRating starsCount={4} />
            <span>(4)</span>
          </div>
          {product.description}
        </Col>
      </Row>
      {JSON.stringify(product)}
    </Container>
  );
};
