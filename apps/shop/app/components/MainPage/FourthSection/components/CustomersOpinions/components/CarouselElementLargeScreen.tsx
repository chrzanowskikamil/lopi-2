import { FC } from 'react';
import ProductRating from '../../../../../Products/components/ProductRating/ProductRating';
import style from './ClientOpinionsCarousel/ClientOpinionsCaroulseLargeScreen/clientOpinionsCarouselLargeScreen.module.scss';

type CarouselElementLargeScreenType = {
  starCount: number;
  opinion: JSX.Element;
  author: string;
  className: string;
  navigation?: JSX.Element;
  onClick: () => void;
  starsIconClass?: string;
};

export const CarouselElementLargeScreen: FC<CarouselElementLargeScreenType> = ({
  className,
  starCount,
  opinion,
  author,
  navigation,
  onClick,
  starsIconClass,
}) => {
  return (
    <div className={`${style.carouselElement} ${className} `} onClick={onClick}>
      <ProductRating
        starsCount={starCount}
        className={style.ratingStars}
        starsIconClass={starsIconClass}
        onClick={onClick}
      />
      <div className={style.opinion} onClick={onClick}>
        {opinion}
      </div>
      <div className={style.author} onClick={onClick}>
        {author}
      </div>
      <div className={style.switchBetween}>{navigation}</div>
    </div>
  );
};
