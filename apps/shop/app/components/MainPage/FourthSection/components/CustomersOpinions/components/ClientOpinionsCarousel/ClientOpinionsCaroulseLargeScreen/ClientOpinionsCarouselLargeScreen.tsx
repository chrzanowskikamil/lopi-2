'use client';

import { FC, useState } from 'react';

import { CarouselElementLargeScreen } from '../../CarouselElementLargeScreen';
import { carouselElementsData as carouselData } from '../components/CarouselElementsData';
import style from './clientOpinionsCarouselLargeScreen.module.scss';

type ClientOpinionsCaroluselLargeScreenProps = {
  className: string;
};

export const ClientOpinionsCaroluselLargeScreen: FC<
  ClientOpinionsCaroluselLargeScreenProps
> = ({ className }) => {
  const [currentOpinionIndex, setCurrentOpinionIndex] = useState(1);

  const getNavigationActive = (index: number) => {
    return index === currentOpinionIndex ? style.active : '';
  };

  const navigation = (
    <nav className={style.navigationCircle}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${style.circle} ${getNavigationActive(index)}`}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentOpinionIndex(index);
          }}
        ></div>
      ))}
    </nav>
  );

  return (
    <div className={`${style.opinionsCarousel}  ${className}`}>
      <CarouselElementLargeScreen
        className={`${style.carouselLeft}  ${
          currentOpinionIndex === 0
            ? style.caruselLeftActive
            : `${style.caruselLeftBack} ${style.carouselBackLeft} ${style.inactive}`
        }`}
        starCount={carouselData[0].starCount}
        opinion={carouselData[0].opinion}
        author={carouselData[0].author}
        onClick={() => setCurrentOpinionIndex(0)}
        starsIconClass={style.starsIconClass}
      />
      <CarouselElementLargeScreen
        className={`${
          currentOpinionIndex === 1
            ? ''
            : `${style.caruselBack} ${style.inactive}`
        } `}
        starCount={carouselData[1].starCount}
        opinion={carouselData[1].opinion}
        author={carouselData[1].author}
        navigation={navigation}
        onClick={() => setCurrentOpinionIndex(1)}
        starsIconClass={style.starsIconClass}
      />
      <CarouselElementLargeScreen
        className={`${style.carouselRight} ${
          currentOpinionIndex === 2
            ? style.caruselRightActive
            : `${style.caruselRightBack} ${style.carouselBackRight} ${style.inactive}`
        }`}
        starCount={carouselData[2].starCount}
        opinion={carouselData[2].opinion}
        author={carouselData[2].author}
        onClick={() => setCurrentOpinionIndex(2)}
        starsIconClass={style.starsIconClass}
      />
    </div>
  );
};
