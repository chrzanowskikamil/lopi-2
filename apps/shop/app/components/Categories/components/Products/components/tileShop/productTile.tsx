'use client';

import style from './tileShop.module.scss';
import styles from '../../Products.module.scss';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import Price from './components/Price';

import Status from './components/Status';
import AddToCart from './components/AddtoCart';
import ProductRating from './components/ProductRating';
import { Col } from 'react-bootstrap';

import { Product } from '../../../../,./../../../../types/ProductsResponse';

type ProductTileProps = {
  name: string;
  imageUrl: string;
  sku: string;
  regularPrice: number;
  discountPrice: number;
};

const ProductTile: FC<ProductTileProps> = ({
  name,
  sku,
  imageUrl,
  regularPrice,
  discountPrice,
}) => {
  return (
    <Col className={styles.product} xl={4} key={sku}>
      <ul className={style.tile}>
        <div className={style.imageArea}>
          {/* <Status status={status} /> */}
          <AddToCart />
          <Image src={imageUrl} alt="picture" className={style.tileImage} />
        </div>
        <div className={style.tileInfo}>
          {/* <ProductRating starsCount={stars} />
          <span>({rewievs})</span> */}
        </div>
        <div className={style.productName}>{name}</div>
        <Price price={regularPrice} currentPrice={discountPrice} />
      </ul>
    </Col>
  );
};

export default ProductTile;
