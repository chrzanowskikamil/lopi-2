'use client';

import { BasicInfoTableElement } from './components/BasicInfoTableElement/BasicInfoTableElement';
import { BasicInfoTableMenu } from './components/BasicInfoTableMenu/BasicInfoTableMenu';
import { BasicInfoTablePagination } from './components/BasicInfoTablePagination/BasicInfoTablePagination';
import { BasicInfoTableTitle } from './components/BasicInfoTableTitle/BasicInfoTableTitle';
import { Container } from 'react-bootstrap';
import { FC } from 'react';
import { basicInfoTableData } from './basicInfoTableData';
import style from './BasicInfoTable.module.scss';

export const BasicInfoTable: FC = () => {
  const infoList = () =>
    basicInfoTableData.map((item, i) => {
      return <BasicInfoTableElement item={item} key={i} />;
    });

  return (
    <Container
      className={`${style.basicInfoSectionContainer} d-flex flex-column justify-content-center`}
    >
      <BasicInfoTableMenu />

      <Container className={`${style.basicInfoTable}`}>
        <BasicInfoTableTitle />

        {...infoList()}

        <BasicInfoTablePagination />
      </Container>
    </Container>
  );
};
