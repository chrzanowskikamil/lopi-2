import { FC } from 'react';
import Price from '../../../components/tileShop/components/Price';
import ProductRating from '../../../components/ProductRating/ProductRating';
import style from './productInfo.module.scss';

interface ProductInfoProps {
  name: string;
  regularPrice: number;
  discountPrice: number;
  description: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({
  name,
  regularPrice,
  discountPrice,
  description,
}) => {
  return (
    <>
      <div className={style.productName}>{name}</div>
      <div className={style.productPrice}>
        <Price price={regularPrice} currentPrice={discountPrice} />
      </div>
      <div className={style.productRating}>
        <ProductRating starsCount={4} />
        <div className={style.productOpinions}>
          <span>brak danych</span>
        </div>
      </div>
      <div className={style.productDescription}>{description}</div>
    </>
  );
};
