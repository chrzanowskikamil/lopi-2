'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { FC, useMemo } from 'react';

import { Breadcrumbs } from '@lopi-2/common';
import { CartInteraction } from './components/CartInteraction/CartInteraction';
import { CrumbsFactory } from '@lopi-2/common';
import { DetailedInfo } from './components/DetailedInfo/DetailedInfo';
import Image from 'next/image';
import { Product } from '../../../../types/ProductsResponse';
import { ProductContextMenu } from '../../ContextMenu/ProductContextMenu';
import { ProductInfo } from './components/ProductInfo/ProductInfo';
import { SimilarProducts } from './components/SimilarProducts/SimilarProducts';
import { SocialsArea } from './components/SocialsArea/SocialsArea';
import style from './productsDetailed.module.scss';

interface ProductsDetailsProps {
  product: Product;
  upSellProducts: Product[];
}

export const ProductsDetails: FC<ProductsDetailsProps> = ({
  product,
  upSellProducts,
}) => {
  const crumbs = useMemo(
    () => CrumbsFactory.createProductCrumb(product, product.categories[0].name),
    [product]
  );

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs crumbs={crumbs} className={style.breadcrumbs} />
        </Col>
      </Row>
      <ProductContextMenu
        productUid={product.uid}
        id={`Product Details ${product.uid}`}
      >
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
              <CartInteraction
                uid={product.uid}
                productQuantity={product.quantity}
              />
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
      </ProductContextMenu>

      <DetailedInfo description={product.description} />
      <SimilarProducts similarProducts={upSellProducts} />
    </Container>
  );
};
