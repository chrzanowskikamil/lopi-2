'use client';
import style from './tileProduct.module.scss';
import styles from '../../Products.module.scss';
import Image from 'next/image';

import { FC } from 'react';

import Price from './components/Price';

import AddToCart from './components/AddtoCart';

import { Col } from 'react-bootstrap';

import { ProductTileColProps } from '../../ProductTypesProps';
import ProductRating from './components/ProductRating';
import Status from './components/Status';

import { useRouter } from 'next/navigation';

const ProductTileCol: FC<ProductTileColProps> = ({
  uid,
  name,
  sku,
  imageUrls,
  regularPrice,
  discountPrice,
}) => {
  const router = useRouter();

  return (
    <Col className={styles.product} xl={4} key={sku}>
      <ul className={style.tile}>
        <div className={style.imageArea}>
          <Status status={'Current'} />
          <AddToCart />
          <Image
            src={
              imageUrls[0] !== undefined
                ? imageUrls[0].imageUrl
                : 'https://storage.googleapis.com/download/storage/v1/b/lopi-2-dev.appspot.com/o/images%2F13018714-7a1c-4708-ba39-004c5121678a.png?generation=1692295691288884&alt=media'
            }
            width={300}
            height={300}
            alt="picture"
            className={style.tileImage}
            onClick={() => router.push(`/productdetails/${uid}`)}
          />
        </div>
        <div className={style.tileInfo}>
          <ProductRating starsCount={4} />
          <span>(4)</span>
        </div>
        <div className={style.productName}>{name}</div>
        <Price price={regularPrice} currentPrice={discountPrice} />
      </ul>
    </Col>
  );
};

export default ProductTileCol;
