'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { Button } from '@lopi-2/common';
import { FC } from 'react';
import Image from 'next/image';
import bannerPicture from '../../../../../assets/PNG/thirdsection/bilboard-coffee-packed.png';
import coffeLeaves from '../../../../../assets/PNG/thirdsection/bg-coffee-leaves.png';
import style from './buyNowBilboard.module.scss';
import { useRouter } from 'next/navigation';

type BuyNowBilboardProps = {
  bilboardProduct: { name: string; shortDescription: string; uid: string };
};

export const BuyNowBilboard: FC<BuyNowBilboardProps> = ({
  bilboardProduct,
}) => {
  const router = useRouter();
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
                <Button
                  className={style.button}
                  onClick={() =>
                    router.push(`productdetails/${bilboardProduct.uid}`)
                  }
                  title={'KUP TERAZ'}
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
