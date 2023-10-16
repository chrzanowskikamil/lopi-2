import { ClientOpinionsCaroluselLargeScreen } from './components/ClientOpinionsCarousel/ClientOpinionsCaroulseLargeScreen/ClientOpinionsCarouselLargeScreen';
import { ClientOpinionsCarouselSmallScreen } from './components/ClientOpinionsCarousel/ClientOpinionsCorouselSmallScreen/CilentOpinionsCarouselSmallScreen';
import { FC } from 'react';
import Image from 'next/image';
import bgCoffeBeans from '../../../../../assets/PNG/forthsection/bg-coffee-beans.png';
import style from './customersOpinions.module.scss';

export const CustomersOpinions: FC = () => (
  <section className="d-flex justify-content-center">
    <Image
      src={bgCoffeBeans}
      alt={'Bg picture. Small contour of coffee beans.'}
      className={style.bgImage}
    />
    <div className={style.titleArea}>
      <div className={style.title}>opinie o naszych kawach</div>
      <div className={style.subtitle}>
        zaufaj opiniom naszych wiernych klientów
      </div>

      {/* FOR SMALL SCREEN */}
      <ClientOpinionsCarouselSmallScreen className={'d-flex d-md-none'} />

      {/* FOR LARGE SCREEN */}
      <ClientOpinionsCaroluselLargeScreen className={'d-none d-md-flex'} />
    </div>
  </section>
);
