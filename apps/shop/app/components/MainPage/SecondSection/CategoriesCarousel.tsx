'use client';
import style from './CategoriesCarousel.module.scss';
import { Carousel } from 'react-bootstrap';
import { FC, useState } from 'react';
import { FetchedCategoryResponse } from '../../../../types/FetchedCategoryResponse';
import { CategoryTile } from './CategoryTile';

interface CategoriesCarouselProps {
  categories: FetchedCategoryResponse[];
}

const CategoriesSlide: FC<CategoriesCarouselProps> = ({ categories }) => {
  return (
    <div className={style.carouselItem}>
      {categories.map((category) => (
        <CategoryTile key={category.uid} category={category} />
      ))}
    </div>
  );
};

const MobileView: FC<CategoriesCarouselProps> = ({ categories }) => {
  return (
    <Carousel>
      {categories.map((category) => (
        <Carousel.Item key={category.uid}>
          <CategoryTile category={category} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export const CategoriesCarousel: FC<CategoriesCarouselProps> = ({
  categories,
}) => {
  const [index, setIndex] = useState<number>(0);
  const CAROUSEL_INTERVAL = 2500;

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const getCategoriesForSlide = (startIndex: number) => {
    return [
      categories[startIndex % categories.length],
      categories[(startIndex + 1) % categories.length],
      categories[(startIndex + 2) % categories.length],
    ];
  };

  return (
    <>
      <div className="d-block d-md-none">
        <MobileView categories={categories} />
      </div>
      <div className="d-none d-md-block">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          className={style.carousel}
          interval={CAROUSEL_INTERVAL}
          slide={false}
        >
          {categories.map((category, index) => (
            <Carousel.Item key={category.uid}>
              <CategoriesSlide categories={getCategoriesForSlide(index)} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};
