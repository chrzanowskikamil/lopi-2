'use client';

import Carousel from 'react-bootstrap/Carousel';
import { CarouselElementSmallScreen } from '../../CarouselElementSmallScreen';
import { FC } from 'react';
import { carouselElementsData as carouselData } from '../components/CarouselElementsData';
import style from './cilentOpinionsCarouselSmallScreen.module.scss';

type ClientOpinionsCarouselSmallScreenProps = {
  className: string;
};

export const ClientOpinionsCarouselSmallScreen: FC<
  ClientOpinionsCarouselSmallScreenProps
> = ({ className }) => {
  return (
    <div className={`${style.opinionsCarousel}  ${className}`}>
      <Carousel>
        <Carousel.Item>
          <CarouselElementSmallScreen
            className={style.carouselElement}
            starCount={carouselData[0].starCount}
            opinion={<>{carouselData[0].opinion}</>}
            author={carouselData[0].author}
            starsIconClass={style.starsIconClass}
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselElementSmallScreen
            className={style.carouselElement}
            starCount={carouselData[1].starCount}
            opinion={<>{carouselData[1].opinion}</>}
            author={carouselData[1].author}
            starsIconClass={style.starsIconClass}
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselElementSmallScreen
            className={style.carouselElement}
            starCount={carouselData[2].starCount}
            opinion={<>{carouselData[2].opinion}</>}
            author={carouselData[2].author}
            starsIconClass={style.starsIconClass}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
