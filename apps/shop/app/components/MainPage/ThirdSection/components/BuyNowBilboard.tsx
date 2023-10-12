'use client';

import AddToCart from '../../../Products/components/tileShop/components/AddtoCart';
import Image from 'next/image';
import bannerPicture from '../../../../assets/PNG/thirdsection/bilboard-coffe-packed.png';
import coffeLeaves from '../../../../assets/PNG/thirdsection/bg-coffe-leaves.png';
import style from '../thirdSection.module.scss';

export const BuyNowBilboard = () => {
  return (
    <section className={style.buyNowBilboard}>
      <Image src={coffeLeaves} alt={'Coffe leaves. Background pitcure.'} />
      <div>
        <title>ETHIOPIA EMERALD</title>
        <span>wyjątkowy napój pochodzący z Etiopii</span>
        <p>
          Ceniona za wyważony smak, bogate ciało i wysoką jakość. To prawdziwy
          klejnot w świecie kawy.
        </p>
        <AddToCart productUid={'dc8ba2a5-ae58-4494-a429-e59c0eee1617'} />
      </div>
      <Image src={bannerPicture} alt={'Package of coffe beans.'} />
    </section>
  );
};
