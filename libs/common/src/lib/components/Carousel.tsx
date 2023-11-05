'use client';

import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import Image from 'next/dist/client/image';
import { Button } from './Button';
import { FC } from 'react';

interface CarouselImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselCaptionProps {
  cafeName: string;
  title: string;
}

interface CarouselButtonProps {
  buttonText: string;
}

export interface CarouselItemsProps {
  image: CarouselImageProps;
  caption?: CarouselCaptionProps;
  button?: CarouselButtonProps;
}

interface CarouselProps {
  items: CarouselItemsProps[];
  className?: string | undefined;
}

const DesktopView: FC<CarouselItemsProps> = ({ image, caption, button }) => (
  <div className="d-none d-md-block">
    <Image {...image} />
    <BootstrapCarousel.Caption>
      <p>{caption?.cafeName}</p>
      <h1>{caption?.title}</h1>
      <Button title={button?.buttonText} />
    </BootstrapCarousel.Caption>
  </div>
);

const MobileView: FC<CarouselItemsProps> = ({ image, caption, button }) => (
  <div className="d-block d-md-none h-80">
    <Image {...image} />
    <p>{caption?.cafeName}</p>
    <h1>{caption?.title}</h1>
    <Button title={button?.buttonText} />
  </div>
);

export const Carousel: FC<CarouselProps> = ({ items, className }) => {
  const CAROUSEL_INTERVAL = 3000;

  return (
    <BootstrapCarousel controls={false} touch wrap interval={CAROUSEL_INTERVAL}>
      {items.map((item, index) => (
        <BootstrapCarousel.Item key={index} className={className}>
          <MobileView {...item} />
          <DesktopView {...item} />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};
