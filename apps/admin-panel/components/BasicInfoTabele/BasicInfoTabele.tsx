'use client';

import { BasicInfoTabeleElement } from './components/BasicInfoTabeleElement/BasicInfoTabeleElement';
import { BasicInfoTabeleMenu } from './components/BasicInfoTabeleMenu/BasicInfoTabeleMenu';
import { BasicInfoTabelePagination } from './components/BasicInfoTabelePagination/BasicInfoTabelePagination';
import { BasicInfoTabeleTitle } from './components/BasicInfoTabeleTitle/BasicInfoTabeleTitle';
import { Container } from 'react-bootstrap';
import { FC } from 'react';
import { basicInfoTabeleData } from './basicInfoTabeleData';
import style from './BasicInfoTabele.module.scss';

export const BasicInfoTabele: FC = () => {
  const infoList = basicInfoTabeleData.map((item, i) => {
    return <BasicInfoTabeleElement item={item} key={i} />;
  });

  return (
    <Container
      className={`${style.basicInfoSectionContainer} d-flex flex-column justify-content-center`}
    >
      <BasicInfoTabeleMenu />

      <Container className={`${style.basicInfoTabele}`}>
        <BasicInfoTabeleTitle />

        {...infoList}

        <BasicInfoTabelePagination />
      </Container>
    </Container>
  );
};
