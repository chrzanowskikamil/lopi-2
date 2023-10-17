'use client';

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
          <Image
            src={pictureOne}
            alt={'coffeeBanner'}
            className={style.imageElement}
          />
          <Image
            src={pictureTwo}
            alt={'coffeeExpresAcesories'}
            className={style.imageElement}
          />
          <Image
            src={pictureThree}
            alt={'coffeeInCups'}
            className={style.imageElement}
          />
          <Image
            src={pictureFour}
            alt={'coffeeInGlasses'}
            className={style.imageElement}
          />
          <Image
            src={pictureFive}
            alt={'womanMakeingCoffee'}
            className={style.imageElement}
          />
        </div>
      </div>
    </>
  );
};
