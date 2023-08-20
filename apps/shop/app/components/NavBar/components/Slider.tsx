import style from '../NavBar.module.scss';

import { SliderArrowLeft } from '../../../assets/SvgIcons/SliderArrowLeft';
import { SliderArrowRight } from '../../../assets/SvgIcons/SliderArrowRight';

import { FC } from 'react';

const Slider: FC = () => {
  return (
    <>
      <div className={style.slider}>
        <div className={style.sliderArrows}>
          <SliderArrowLeft />
        </div>
        <span className={style.sliderText}>Darmowa wysyłka powyżej 200 zł</span>
        <div className={style.sliderArrows}>
          <SliderArrowRight />
        </div>
      </div>
    </>
  );
};
export default Slider;
