import style from './tileProduct.module.scss';
import styles from '../../Products.module.scss';
import Image from 'next/image';

import { FC } from 'react';

import Price from './components/Price';

import AddToCart from './components/AddtoCart';

import { Col } from 'react-bootstrap';

import ProductRating from './components/ProductRating';
import Status from './components/Status';

interface ProductTileColProps {
  product: {
    uid: string;
    name: string;
    imageUrls: ImageUrl[];
    sku: string;
    regularPrice: number;
    discountPrice: number;
  };
}
interface ImageUrl {
  imageUrl: string;
}

const ProductTileCol: FC<ProductTileColProps> = ({ product }) => {
  return (
    <Col className={styles.product} xl={4} key={product.sku}>
      <ul className={style.tile}>
        <div className={style.imageArea}>
          <Status status={'Current'} />
          <AddToCart productUid={product.uid} />
          <Image
            src={
              product.imageUrls[0] !== undefined
                ? product.imageUrls[0].imageUrl
                : 'https://storage.googleapis.com/download/storage/v1/b/lopi-2-dev.appspot.com/o/images%2F13018714-7a1c-4708-ba39-004c5121678a.png?generation=1692295691288884&alt=media'
            }
            width={300}
            height={300}
            alt="picture"
            className={style.tileImage}
          />
        </div>
        <div className={style.tileInfo}>
          <ProductRating starsCount={4} />
          <span>(4)</span>
        </div>
        <div className={style.productName}>{product.name}</div>
        <Price
          price={product.regularPrice}
          currentPrice={product.discountPrice}
        />
      </ul>
    </Col>
  );
};

export default ProductTileCol;
