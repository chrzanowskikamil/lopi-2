'use client';

import style from './InfoBanner.module.scss';

import { FC } from 'react';

import { SliderArrowLeft } from '../../assets/SvgIcons/SliderArrowLeft';
import { SliderArrowRight } from '../../assets/SvgIcons/SliderArrowRight';
import { usePathname } from 'next/navigation';

export const InfoBanner: FC = () => {
  const pathname = usePathname();

  return (
    <div className={style.slider + ' ' + (pathname !== '/' && 'd-none')}>
      <div className={style.sliderArrows}>
        <SliderArrowLeft />
      </div>
      <span className={style.sliderText}>Darmowa wysyłka powyżej 200 zł</span>
      <div className={style.sliderArrows}>
        <SliderArrowRight />
      </div>
    </div>
  );
};
