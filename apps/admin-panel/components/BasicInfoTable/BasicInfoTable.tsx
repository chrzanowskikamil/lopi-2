'use client';

import { BasicInfoTableElement } from './components/BasicInfoTableElement/BasicInfoTableElement';
import { BasicInfoTableMenu } from './components/BasicInfoTableMenu/BasicInfoTableMenu';
import { BasicInfoTablePagination } from './components/BasicInfoTablePagination/BasicInfoTablePagination';
import { BasicInfoTableTitle } from './components/BasicInfoTableTitle/BasicInfoTableTitle';
import { Container } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import { basicInfoTableData } from './basicInfoTableData';
import style from './BasicInfoTable.module.scss';
import { useRouter } from 'next/navigation';
import { AppRoutes, useAuth } from '@lopi-2/common';

export const BasicInfoTable: FC = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(AppRoutes.getLoginPath());
    }
  }, [isAuthenticated, router]);

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
