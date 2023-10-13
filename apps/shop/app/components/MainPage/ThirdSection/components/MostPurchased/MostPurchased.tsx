import { Button } from '@lopi-2/common';
import { FC } from 'react';
import Image from 'next/image';
import MostPurchasedList from './components/MostPurchasedList';
import { Product } from '../../../../../../types/ProductsResponse';
import { ReassuranceSection } from './components/ReassuranceSection/ReassuranceSection';
import bgCoffeCheriesUpper from '../../../../../assets/PNG/thirdsection/bg-coffee-cheries-upper.png';
import { reassuranceData } from './components/ReassuranceSection/reassuranceSectionData';
import style from './mostPurchased.module.scss';

type MostPurchasedTypes = {
  productList: Product[];
};

export const MostPurchased: FC<MostPurchasedTypes> = ({ productList }) => {
  return (
    <section className={style.mostPurchased}>
      <Image
        src={bgCoffeCheriesUpper}
        alt={'Background picture. Coffee beans. Coffee cherries.'}
        className={style.bgPictureUpper}
      />
      <h1 className={style.title}>Najczęściej kupowane</h1>
      <MostPurchasedList productList={productList} />
      <div className={style.buttonContainer}>
        <Button title={'KUPUJ BESTSELLERY'} className={style.button} />
      </div>
      <ReassuranceSection reassuranceData={reassuranceData} />
    </section>
  );
};
