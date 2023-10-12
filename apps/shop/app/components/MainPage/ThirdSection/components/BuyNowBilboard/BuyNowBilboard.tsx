'use client';

import { Col, Container, Row } from 'react-bootstrap';

import AddToCart from '../../../../Products/components/tileShop/components/AddtoCart';
import Image from 'next/image';
import bannerPicture from '../../../../../assets/PNG/thirdsection/bilboard-coffee-packed.png';
import coffeLeaves from '../../../../../assets/PNG/thirdsection/bg-coffee-leaves.png';
import style from './buyNowBilboard.module.scss';

export const BuyNowBilboard = () => {
  return (
    <>
      <section className={style.buyNewBilboard}>
        <Image
          src={coffeLeaves}
          alt={'Coffe leaves. Background pitcure.'}
          className={style.bgPicture}
        />
        <Container>
          <Row className={style.contentContainer}>
            <Col xxl={4} md={5} sm={12}>
              <div>
                <div className={style.title}>ETHIOPIA EMERALD</div>
                <div className={style.subtitle}>
                  wyjątkowy napój pochodzący z Etiopii
                </div>
                <p className={style.description}>
                  Ceniona za wyważony smak, bogate ciało i wysoką jakość. To
                  prawdziwy klejnot w świecie kawy. klejnot w świecie kawy.
                </p>
                <AddToCart
                  productUid={'dc8ba2a5-ae58-4494-a429-e59c0eee1617'}
                  className={style.button}
                  buttonText="KUP TERAZ"
                />
              </div>
            </Col>
            <Col xxl={8} md={7} sm={12}>
              <div className={style.bannerPictureContainer}>
                <Image
                  src={bannerPicture}
                  alt={'Package of coffe beans.'}
                  className={style.bannerPicture}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
