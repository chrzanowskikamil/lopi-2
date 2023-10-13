import { CustomersGallery } from './components/CustomersGallery';
import { FC } from 'react';
import Image from 'next/image';
import bgCoffePlants from '../../../../../assets/PNG/forthsection/bg-coffee-plants.png';
import style from './ourCustomers.module.scss';

export const OurCustomers: FC = () => {
  return (
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
  );
};
