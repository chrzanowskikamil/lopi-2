import { FC } from 'react';
import ProductRating from '../../../../../../../Products/components/ProductRating/ProductRating';
import style from '../../../customersOpinions.module.scss';

type CarouselElementType = {
  starCount: number;
  opinion: string;
  author: string;
  className: string;
  navigation?: JSX.Element;
  onClick: () => void;
};

export const CarouselElement: FC<CarouselElementType> = ({
  className,
  starCount,
  opinion,
  author,
  navigation,
  onClick,
}) => {
  return (
    <div className={`${style.carouselElement} ${className}`} onClick={onClick}>
      <ProductRating starsCount={starCount} className={style.ratingStars} />
      <div className={style.opinion}>{opinion}</div>
      <div className={style.author}>{author}</div>
      <div className={style.switchBetween}>{navigation}</div>
    </div>
  );
};
