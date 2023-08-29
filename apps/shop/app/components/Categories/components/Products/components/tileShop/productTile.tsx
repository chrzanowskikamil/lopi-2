import style from './tileShop.module.scss';
import styles from '../../Products.module.scss';
import Image from 'next/image';

import { FC } from 'react';

import Price from './components/Price';

import Status from './components/Status';
import AddToCart from './components/AddtoCart';
import ProductRating from './components/ProductRating';
import { Col } from 'react-bootstrap';

import { Product } from '../../../../,./../../../../types/ProductsResponse';

interface Image {
  imageUrl: string;
}
type ProductTileProps = {
  name: string;
  imagesUrls: Image[];
  sku: string;
  regularPrice: number;
  discountPrice: number;
};

const ProductTile: FC<ProductTileProps> = ({
  name,
  sku,
  imagesUrls,
  regularPrice,
  discountPrice,
}) => {
  return (
    <Col className={styles.product} xl={4} key={sku}>
      <ul className={style.tile}>
        <div className={style.imageArea}>
          {/* <Status status={status} /> */}
          <AddToCart />
          <Image
            src={
              'https://storage.googleapis.com/download/storage/v1…218f388.jpg?generation=1692295048031287&alt=media'
            }
            width={300}
            height={300}
            alt="picture"
            className={style.tileImage}
          />
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
