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
        {/* `'d-none d-md-flex'` */}
        {/* `'d-none d-md-flex'` */}
        <div className={style.galery}>
          <Image src={pictureOne} alt={''} />
          <Image src={pictureTwo} alt={''} />
          <Image src={pictureThree} alt={''} />
          <Image src={pictureFour} alt={''} />
          <Image src={pictureFive} alt={''} />
        </div>
      </div>
      {/* 
      <Carousel className="d-flex d-md-none">
        <Carousel.Item>
          <Image src={pictureOne} alt={''} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pictureTwo} alt={''} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pictureThree} alt={''} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pictureFour} alt={''} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={pictureFive} alt={''} />
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};
