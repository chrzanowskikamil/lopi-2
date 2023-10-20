import AddToCart from './components/AddtoCart';
import { CartContextMenu } from '../../../ContextMenu/CartContextMenu';
import { Col } from 'react-bootstrap';
import { FC } from 'react';
import Image from 'next/image';
import Price from './components/Price';
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
    <Col className={`${style.product} ${className}`} xl={col} key={product.sku}>
      <CartContextMenu
        key={index}
        uid={product.uid}
        id={`${cartContextId} ${product.uid}`}
      >
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
              onClick={() => router.push(`productdetails/${product.uid}`)}
            />
          </div>
          <ProductRating starsCount={4} review={4} />
          <div className={style.productName}>{product.name}</div>
          <Price
            price={product.regularPrice}
            currentPrice={product.discountPrice}
          />
        </ul>
      </CartContextMenu>
    </Col>
  );
};

export default ProductTileCol;
