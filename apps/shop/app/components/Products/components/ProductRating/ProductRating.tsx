'use client';

import { FC } from 'react';
import { IconWrapper } from '../../../Icons/IconWrapper';
import style from './productRating.module.scss';

type ProductRatingProps = {
  starsCount: number;
  review?: number;
  className?: string;
  starsIconClass?: string;
  onClick?: () => void;
};

const ProductRating: FC<ProductRatingProps> = ({
  starsCount,
  review,
  className,
  starsIconClass,
  onClick,
}) => {
  const FullStar = (
    <IconWrapper
      icon={
        <i
          className={`${
            style.star && style.starOrange
          } ${starsIconClass} bi bi-star-fill`}
        ></i>
      }
    />
  );

  const EmptyStar = (
    <IconWrapper
      icon={
        <i
          className={`${
            style.star && style.starGrey
          } ${starsIconClass} bi bi-star-fill`}
        ></i>
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
      <div className={`${style.tileInfo} ${className}`} onClick={onClick}>
        {RatingStar}
        {review ? <span>({review})</span> : ''}
      </div>
    </>
  );
};

export default ProductRating;
