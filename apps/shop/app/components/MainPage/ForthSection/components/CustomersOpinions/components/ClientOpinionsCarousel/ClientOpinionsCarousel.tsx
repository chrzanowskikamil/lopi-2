'use client';

import { CarouselElement } from './components/CarouselElement';
import { carouselElementsData as carouselData } from './components/CarouselElementsData';
import style from '../../customersOpinions.module.scss';
import { useState } from 'react';

export const ClientOpinionsCarolusel = () => {
  const [currentOpinionIndex, setCurrentOpinionIndex] = useState(0);

  // const showNextOpinion = () => {
  //   setCurrentOpinionIndex(
  //     (prevIndex) => (prevIndex + 1) % carouselData.length
  //   );
  // };

  // const showPreviousOpinion = () => {
  //   setCurrentOpinionIndex((prevIndex) =>
  //     prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
  //   );
  // };
  const getNavigationActive = (index: number) => {
    return index === currentOpinionIndex ? style.active : '';
  };

  const navigaion = (
    <div className={style.navigationCircle}>
      <div
        className={`${style.circle} ${getNavigationActive(0)}`}
        onClick={() => setCurrentOpinionIndex(0)}
      ></div>
      <div
        className={`${style.circle} ${getNavigationActive(1)}`}
        onClick={() => setCurrentOpinionIndex(1)}
      ></div>
      <div
        className={`${style.circle} ${getNavigationActive(2)}`}
        onClick={() => setCurrentOpinionIndex(2)}
      ></div>
    </div>
  );

  return (
    <div className={style.opinionsCarousel}>
      <CarouselElement
        className={`${style.carouselLeft} ${style.caruselBack}`}
        starCount={carouselData[0].starCount}
        opinion={carouselData[0].opinion}
        author={carouselData[0].author}
      />
      <CarouselElement
        className={style.carouselMiddle}
        starCount={carouselData[1].starCount}
        opinion={carouselData[1].opinion}
        author={carouselData[1].author}
        navigation={navigaion}
      />
      <CarouselElement
        className={`${style.carouselRight} ${style.caruselBack}`}
        starCount={carouselData[2].starCount}
        opinion={carouselData[2].opinion}
        author={carouselData[2].author}
      />
    </div>
  );
};
