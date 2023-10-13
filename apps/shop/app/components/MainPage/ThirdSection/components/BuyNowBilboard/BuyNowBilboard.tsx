'use client';

import { Col, Container, Row } from 'react-bootstrap';

import AddToCart from '../../../../Products/components/tileShop/components/AddtoCart';
import { FC } from 'react';
import Image from 'next/image';
import bannerPicture from '../../../../../assets/PNG/thirdsection/bilboard-coffee-packed.png';
import coffeLeaves from '../../../../../assets/PNG/thirdsection/bg-coffee-leaves.png';
import style from './buyNowBilboard.module.scss';

type BuyNowBilboardProps = {
  bilboardProduct: { name: string; shortDescription: string; uid: string };
};

export const BuyNowBilboard: FC<BuyNowBilboardProps> = ({
  bilboardProduct,
}) => {
  let subtitle = '';

  const splitDescriptionSubtitle = () => {
    const output = bilboardProduct.shortDescription.split('.')[0] + '. ';

    return (subtitle = output);
  };

  const splitDescriptionDescription = () => {
    return bilboardProduct.shortDescription.replace(subtitle, '');
  };

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
                <div className={style.title}>{bilboardProduct.name}</div>
                <div className={style.subtitle}>
                  {splitDescriptionSubtitle()}
                </div>
                <p className={style.description}>
                  {splitDescriptionDescription()}
                </p>
                <AddToCart
                  productUid={bilboardProduct.uid}
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
