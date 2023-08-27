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

type ProductTileProps = {
  id: number;
  picture: StaticImageData;
  stars: number;
  rewievs: number;
  name?: string;
  price: number;
  currentPrice?: number;
  status?: string;
};

const ProductTile: FC<ProductTileProps> = ({
  id,
  picture,
  stars,
  rewievs,
  name,
  price,
  currentPrice,
  status,
}) => {
  return (
    <Col className={styles.product} xl={4} key={id}>
      <ul className={style.tile}>
        <div className={style.imageArea}>
          <Status status={status} />
          <AddToCart />
          <Image src={picture} alt="picture" className={style.tileImage} />
        </div>
        <div className={style.tileInfo}>
          <ProductRating starsCount={stars} />
          <span>({rewievs})</span>
        </div>
        <div className={style.productName}>{name}</div>
        <Price price={price} currentPrice={currentPrice} />
      </ul>
    </Col>
  );
};

export default ProductTile;
