'use client';

import style from '../tileProduct.module.scss';

import { FC } from 'react';
import { IconWrapper } from '../../../../Icons/IconWrapper';

import { ProductRatingProps } from '../../../ProductTypesProps';

const ProductRating: FC<ProductRatingProps> = ({ starsCount }) => {
  const fullStar = (
    <IconWrapper
      icon={
        <i className={`${style.star && style.starOrange} bi bi-star-fill`}></i>
      }
    />
  );
  const emptyStar = (
    <IconWrapper
      icon={
        <i className={`${style.star && style.starGrey} bi bi-star-fill`}></i>
      }
    />
  );

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>{index <= starsCount - 1 ? fullStar : emptyStar}</span>
    );
  });

  return <>{ratingStar}</>;
};

export default ProductRating;
