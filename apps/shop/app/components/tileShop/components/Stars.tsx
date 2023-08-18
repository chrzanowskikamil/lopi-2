'use client';

import style from '../tileShop.module.scss';

import { FC } from 'react';

import { StarIcon } from '../../../assets/SvgIcons/StarIcon';

type StarsProps = {
  starsCount: number;
};

const Stars: FC<StarsProps> = ({ starsCount }) => {
  const fullStar = <StarIcon className={style.star && style.starOrange} />;
  const emptyStar = <StarIcon className={style.star} />;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index}>{index <= starsCount - 1 ? fullStar : emptyStar}</span>
    );
  });
  return <>{ratingStar}</>;
};

export default Stars;
