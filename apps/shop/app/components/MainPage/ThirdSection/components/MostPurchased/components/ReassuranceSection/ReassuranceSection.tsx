'use client';

import { Container, Row } from 'react-bootstrap';

import { FC } from 'react';
import Image from 'next/image';
import { ReassuranceBrick } from './components/ReassuranceBrick';
import { ReassuranceDataProps } from './reassuranceSectionData';
import bgCoffeCheriesBottom from '../../../../../../../assets/PNG/thirdsection/bg-coffee-cheries-bottom.png';
import style from '../../mostPurchased.module.scss';

type ReassuranceSectionDataProps = {
  reassuranceData: ReassuranceDataProps[];
};

export const ReassuranceSection: FC<ReassuranceSectionDataProps> = ({
  reassuranceData,
}) => {
  const displayData = reassuranceData.map((brick, i) => {
    return (
      <ReassuranceBrick
        key={i}
        icon={brick.icon}
        title={brick.title}
        description={brick.description}
      />
    );
  });

  return (
    <>
      <Container className={style.brickContainer}>
        <Image
          src={bgCoffeCheriesBottom}
          alt={'Background picture. Coffee beans. Coffee cherries.'}
          className={style.bgPictureBottom}
        />
        <Row>{...displayData}</Row>
      </Container>
    </>
  );
};
