'use client';

import { CarouselElement } from './components/CarouselElement';
import { carouselElementsData as carouselData } from './components/CarouselElementsData';
import style from '../../customersOpinions.module.scss';
import { useState } from 'react';

export const ClientOpinionsCarolusel = () => {
  const [currentOpinionIndex, setCurrentOpinionIndex] = useState(1);

  const getNavigationActive = (index: number) => {
    return index === currentOpinionIndex ? style.active : '';
  };

  const navigaion = (
    <div className={style.navigationCircle}>
      <div className={`${style.circle} ${getNavigationActive(0)}`}></div>
      <div className={`${style.circle} ${getNavigationActive(1)}`}></div>
      <div className={`${style.circle} ${getNavigationActive(2)}`}></div>
    </div>
  );

  return (
    <div className={style.opinionsCarousel}>
      <CarouselElement
        className={`${style.carouselLeft}  ${
          currentOpinionIndex === 0
            ? style.caruselLeftActive
            : `${style.caruselLeftBack} ${style.carouselBackLeft} ${style.inactive}`
        }`}
        starCount={carouselData[0].starCount}
        opinion={carouselData[0].opinion}
        author={carouselData[0].author}
        onClick={() => setCurrentOpinionIndex(0)}
      />
      <CarouselElement
        className={`${
          currentOpinionIndex === 1
            ? ''
            : `${style.caruselBack} ${style.inactive}`
        } `}
        starCount={carouselData[1].starCount}
        opinion={carouselData[1].opinion}
        author={carouselData[1].author}
        navigation={navigaion}
        onClick={() => setCurrentOpinionIndex(1)}
      />
      <CarouselElement
        className={`${style.carouselRight} ${
          currentOpinionIndex === 2
            ? style.caruselRightActive
            : `${style.caruselRightBack} ${style.carouselBackRight} ${style.inactive}`
        }`}
        starCount={carouselData[2].starCount}
        opinion={carouselData[2].opinion}
        author={carouselData[2].author}
        onClick={() => setCurrentOpinionIndex(2)}
      />
    </div>
  );
};
