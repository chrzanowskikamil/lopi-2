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
  imageUrls: Image[];
  sku: string;
  regularPrice: number;
  discountPrice: number;
};

const ProductTile: FC<ProductTileProps> = ({
  name,
  sku,
  imageUrls,
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
              imageUrls[0] !== undefined
                ? imageUrls[0].imageUrl
                : 'https://storage.googleapis.com/download/storage/v1/b/lopi-2-dev.appspot.com/o/images%2F13018714-7a1c-4708-ba39-004c5121678a.png?generation=1692295691288884&alt=media'
            }
            width={300}
            height={300}
            alt="picture"
            className={style.tileImage}
          />
        </div>
        <div className={style.tileInfo}>
          <ProductRating starsCount={stars} />
          <span>({rewievs})</span>
        </div>
        <div className={style.productName}>{name}</div>
        <Price price={regularPrice} currentPrice={discountPrice} />
        <Price price={regularPrice} currentPrice={discountPrice} />
      </ul>
    </Col>
  );
};

export default ProductTile;
