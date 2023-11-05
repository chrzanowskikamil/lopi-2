'use client';

import style from './InfoBanner.module.scss';

import { FC } from 'react';

import { IconWrapper } from '../Icons/IconWrapper';
import { usePathname } from 'next/navigation';

export const InfoBanner: FC = () => {
  const pathname = usePathname();

  return (
    <div className={style.slider + ' ' + (pathname !== '/' && 'd-none')}>
      <div className={style.sliderArrows}>
        <IconWrapper
          icon={<i className={`${style.sliderArrow} bi bi-caret-left`}></i>}
        />
      </div>
      <span className={style.sliderText}>Darmowa wysyłka powyżej 200 zł</span>
      <div className={style.sliderArrows}>
        <IconWrapper
          icon={<i className={`${style.sliderArrow} bi bi-caret-right`}></i>}
        />
      </div>
    </div>
  );
};
