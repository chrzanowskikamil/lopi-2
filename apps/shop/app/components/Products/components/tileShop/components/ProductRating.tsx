'use client';

import style from '../tileProduct.module.scss';

import { FC } from 'react';
import { IconWrapper } from '../../../../Icons/IconWrapper';

type ProductRatingProps = {
  starsCount: number;
};

const ProductRating: FC<ProductRatingProps> = ({ starsCount }) => {
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

  return <>{RatingStar}</>;
};

export default ProductRating;
