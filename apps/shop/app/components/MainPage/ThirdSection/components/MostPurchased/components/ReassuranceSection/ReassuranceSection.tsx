'use client';

import { Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { ReassuranceBrick } from './components/ReassuranceBrick';
import style from '../../mostPurchased.module.scss';
import bgCoffeCheriesBottom from '../../../../../../../assets/PNG/thirdsection/bg-coffee-cheries-bottom.png';

export const ReassuranceSection = () => {
  return (
    <>
      <Container className={style.brickContainer}>
        <Image
          src={bgCoffeCheriesBottom}
          alt={'Background picture. Coffee beans. Coffee cherries.'}
          className={style.bgPictureBottom}
        />
        <Row>
          <ReassuranceBrick
            icon={<i className="bi bi-truck"></i>}
            title={'szybka i bezpieczna dostawa'}
            description={'Darmowa dostawa przy zamówieniach powyżej 200 zł'}
          />
          <ReassuranceBrick
            icon={<i className="bi bi-lock"></i>}
            title={'zakupy bez zmartwień'}
            description={'Proces płatności jest szybki, łatwy i bezpieczny.'}
          />
          <ReassuranceBrick
            icon={<i className="bi bi-arrow-counterclockwise"></i>}
            title={'gwarancja zadowolenia'}
            description={'Możliwość zwrotu lub reklamacji w ciągu 14 dni'}
          />
        </Row>
      </Container>
    </>
  );
};
