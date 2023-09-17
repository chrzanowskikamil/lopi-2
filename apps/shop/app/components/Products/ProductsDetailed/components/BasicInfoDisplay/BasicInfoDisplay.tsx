import { FC } from 'react';
import Price from '../../../components/tileShop/components/Price';
import ProductRating from '../../../components/ProductRating/ProductRating';
import style from './basicInfoDisplay.module.scss';

interface BasicInfoDisplayProps {
  name: string;
  regularPrice: number;
  discountPrice: number;
  description: string;
}

export const BasicInfoDisplay: FC<BasicInfoDisplayProps> = ({
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
