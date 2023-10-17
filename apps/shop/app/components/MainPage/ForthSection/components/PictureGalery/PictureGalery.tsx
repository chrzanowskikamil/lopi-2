'use client';

import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import pictureFive from '../../../../../assets/PNG/forthsection/pictureGalery/womanMakeingCoffee.png';
import pictureFour from '../../../../../assets/PNG/forthsection/pictureGalery/coffeeInGlasses.png';
import pictureOne from '../../../../../assets/PNG/forthsection/pictureGalery/coffeeBanner.png';
import pictureThree from '../../../../../assets/PNG/forthsection/pictureGalery/coffeeInCups.png';
import pictureTwo from '../../../../../assets/PNG/forthsection/pictureGalery/coffeeExpresAcesories.png';
import style from './pictureGalery.module.scss';

export const PictureGalery = async () => {
  return (
    <>
      <div className={style.galeryContainer}>
        <div className={style.galery}>
          <Image src={pictureOne} alt={''} className={style.imageElement} />
          <Image src={pictureTwo} alt={''} className={style.imageElement} />
          <Image src={pictureThree} alt={''} className={style.imageElement} />
          <Image src={pictureFour} alt={''} className={style.imageElement} />
          <Image src={pictureFive} alt={''} className={style.imageElement} />
        </div>
      </div>
    </>
  );
};
