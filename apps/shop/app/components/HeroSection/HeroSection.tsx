import style from './HeroSection.module.scss';
import { FC } from 'react';
import { Carousel } from '@lopi-2/common';
import { DiscoverySection } from './DiscoverySection';
import { carouselItems } from './heroData';

export const HeroSection: FC = () => {
  return (
    <section>
      <Carousel items={carouselItems} className={style.carousel} />
      <DiscoverySection />
    </section>
  );
};
