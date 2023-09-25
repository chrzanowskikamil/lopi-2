'use client';

import style from './productRating.module.scss';

import { FC } from 'react';
import { IconWrapper } from '../../../Icons/IconWrapper';

type ProductRatingProps = {
  starsCount: number;
  review?: number;
};

const ProductRating: FC<ProductRatingProps> = ({ starsCount, review }) => {
  const FullStar = (
    <IconWrapper
      icon={
        <i className={`${style.star && style.starOrange} bi bi-star-fill`}></i>
      }
    />
  );

  const EmptyStar = (
    <IconWrapper
      icon={
        <i className={`${style.star && style.starGrey} bi bi-star-fill`}></i>
      }
    />
  );

  const RatingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>{index <= starsCount - 1 ? FullStar : EmptyStar}</span>
    );
  });

  return (
    <>
      <div className={style.tileInfo}>
        {RatingStar}
        {review ? <span>({review})</span> : ''}
      </div>
    </>
  );
};

export default ProductRating;
