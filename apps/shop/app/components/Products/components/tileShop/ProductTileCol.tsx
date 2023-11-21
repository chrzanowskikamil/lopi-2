import AddToCart from './components/AddtoCart';
import { Col } from 'react-bootstrap';
import { FC } from 'react';
import Image from 'next/image';
import { NO_IMAGE_URL } from '@lopi-2/common';
import Price from './components/Price';
import { ProductContextMenu } from '../../../ContextMenu/ProductContextMenu';
import ProductRating from '../ProductRating/ProductRating';
import Status from './components/Status';
import style from './tileProduct.module.scss';
import { useRouter } from 'next/navigation';

interface ProductTileColProps {
  product: {
    uid: string;
    name: string;
    imageUrls: ImageUrl[];
    sku: string;
    regularPrice: number;
    discountPrice: number;
  };
  col: number;
  className?: string;
  index: number;
  cartContextId?: string;
}
interface ImageUrl {
  imageUrl: string;
}

const ProductTileCol: FC<ProductTileColProps> = ({
  product,
  col,
  className,
  index,
  cartContextId,
}) => {
  const router = useRouter();

  return (
    <Col
      className={`${style.product} ${className}`}
      xl={col}
      key={product?.sku}
    >
      <ProductContextMenu
        key={index}
        productUid={product?.uid}
        id={`${cartContextId} ${product?.uid}`}
      >
        <ul className={style.tile}>
          <div className={style.imageArea}>
            <Status status={'Current'} />
            <AddToCart productUid={product?.uid} />
            <Image
              src={product?.imageUrls?.[0]?.imageUrl || NO_IMAGE_URL}
              width={300}
              height={300}
              alt="picture"
              className={style.tileImage}
              onClick={() => router.push(`productdetails/${product?.uid}`)}
            />
          </div>
          <ProductRating starsCount={4} review={4} />
          <div className={style.productName}>{product?.name}</div>
          <Price
            price={product?.regularPrice}
            currentPrice={product?.discountPrice}
          />
        </ul>
      </ProductContextMenu>
    </Col>
  );
};

export default ProductTileCol;
