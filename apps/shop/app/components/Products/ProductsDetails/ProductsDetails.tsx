'use client';

import style from './productsDetailed.module.scss';

import { Col, Container, Row } from 'react-bootstrap';
import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import { SimilarProducts } from './components/SimilarProducts/SimilarProducts';
import { DetailedInfo } from './components/DetailedInfo/DetailedInfo';
import { SocialsArea } from './components/SocialsArea/SocialsArea';
import { CartInteraction } from './components/CartInteraction/CartInteraction';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { FC } from 'react';
import { Product } from '../../../../types/ProductsResponse';

interface ProductsDetailsProps {
  product: Product;
}

export const ProductsDetails: FC<ProductsDetailsProps> = ({ product }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs
            category={
              product.categories[0] !== undefined
                ? product.categories[0].name
                : 'No data'
            }
            customClassName={style.breadcrumbs}
          />
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
            <ProductInfo
              name={product.name}
              regularPrice={product.regularPrice}
              discountPrice={product.discountPrice}
              description={product.description}
            />
            <CartInteraction uid={product.uid} />
            <SocialsArea />
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

      <DetailedInfo description={product.description} />
      <SimilarProducts />
    </Container>
  );
};
