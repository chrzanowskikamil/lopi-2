import { ClientOpinionsCarolusel } from './components/ClientOpinionsCarousel/ClientOpinionsCarousel';
import Image from 'next/image';
import bgCoffeBeans from '../../../../../assets/PNG/forthsection/bg-coffee-beans.png';
import style from './customersOpinions.module.scss';

export const CustomersOpinions = () => {
  return (
    <section className={style.customersOpinions}>
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
        <ClientOpinionsCarolusel />
      </div>
    </section>
  );
};
