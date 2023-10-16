'use client';

import { Carousel } from 'react-bootstrap';
import { CustomersGallery } from './components/CustomersGallery';
import { FC } from 'react';
import Image from 'next/image';
import bgCoffePlants from '../../../../../assets/PNG/forthsection/bg-coffee-plants.png';
import firstCompanyPicture from '../../../../../assets/PNG/forthsection/customers-galerry-one.png';
import forthCompanyPicture from '../../../../../assets/PNG/forthsection/customers-galerry-four.png';
import secoundCompanyPicture from '../../../../../assets/PNG/forthsection/customers-galerry-two.png';
import style from './ourCustomers.module.scss';
import thirdCompanyPicture from '../../../../../assets/PNG/forthsection/customers-galerry-three.png';

const OurCustomersCarousel: FC = () => {
  const carouselItems = [
    {
      src: firstCompanyPicture,
      alt: 'firstCompanyPicture',
    },
    {
      src: secoundCompanyPicture,
      alt: 'secoundCompanyPicture',
    },
    {
      src: thirdCompanyPicture,
      alt: 'thirdCompanyPicture',
    },
    {
      src: forthCompanyPicture,
      alt: 'forthCompanyPicture',
    },
  ];

  return (
    <Carousel className={style.carouselItems} controls={false}>
      {carouselItems.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <Carousel.Item key={index} className={style.carouselItem}>
              <Image
                src={carouselItems[index].src}
                alt={carouselItems[index].alt}
              />
              {carouselItems[index + 1] && (
                <Image
                  src={carouselItems[index + 1].src}
                  alt={carouselItems[index + 1].alt}
                />
              )}
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
  );
};
export const OurCustomers: FC = () => {
  return (
    <>
      <div className={style.carousel}>
        <OurCustomersCarousel />
      </div>
      <section className={style.ourCustomers}>
        <div className={style.bgPictureContainer}>
          <Image
            src={bgCoffePlants}
            alt={'Coffee plants.Background picture'}
            className={style.bgPicture}
          />
          <div className={style.opacityBlock}>
            <div className={style.title}>Nasi klienci</div>
          </div>
        </div>
        <CustomersGallery />
      </section>
    </>
  );
};
