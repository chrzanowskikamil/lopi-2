import { Button } from '@lopi-2/common';
import { BuyNowBilboard } from './components/BuyNowBilboard';
import Image from 'next/image';
import MostPurchased from './components/MostPurchased';
import { Product } from '../../../../../shop/types/ProductsResponse';
import { ReassuranceSection } from './components/ReassuranceSection';
import bgCoffeCheries from '../../../assets/PNG/thirdsection/bg-coffe-cheries.png';
import { getProductsMostPurchased } from '../../../../../shop/actions/getProductsMostPurchased';
import style from './thirdSection.module.scss';

export const ThirdSection = async () => {
  const mostPurchasedList: Product[] = await getProductsMostPurchased();

  return (
    <>
      <section className={style.mostPurchased}>
        <Image
          src={bgCoffeCheries}
          alt={'Background picture. Coffe beans. Coffe cherries.'}
          className={style.bgPicture}
        />
        <h1 className={style.title}>Najczęściej kupowane</h1>
        <MostPurchased productList={mostPurchasedList} />
        <div className={style.buttonContainer}>
          <Button title={'KUPUJ BESTSELLERY'} className={style.button} />
        </div>
        <ReassuranceSection />
      </section>
      <BuyNowBilboard />
    </>
  );
};
