import Image from 'next/image';
import bgCoffePlants from '../../../../../assets/PNG/forthsection/bg-coffee-plants.png';
import style from './ourCustomers.module.scss';

export const OurCustomers = async () => {
  return (
    <section>
      <div className={style.bgPictureContainer}>
        <Image
          src={bgCoffePlants}
          alt={'Coffee plants.Background picture'}
          className={style.bgPicture}
        />
      </div>
    </section>
  );
};
