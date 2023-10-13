'use client';

import { Container, Row } from 'react-bootstrap';

import { CustomerLogoCol } from './CustomerLogoCol';
import { FC } from 'react';
import firstCompanyPicture from '../../../../../../assets/PNG/forthsection/customers-galerry-one.png';
import forthCompanyPicture from '../../../../../../assets/PNG/forthsection/customers-galerry-four.png';
import secoundCompanyPicture from '../../../../../../assets/PNG/forthsection/customers-galerry-two.png';
import style from '../ourCustomers.module.scss';
import thirdCompanyPicture from '../../../../../../assets/PNG/forthsection/customers-galerry-three.png';

export const CustomersGallery: FC = () => {
  return (
    <Container className={style.companyLogoList}>
      <Row>
        <CustomerLogoCol
          src={firstCompanyPicture}
          alt={
            'Company logo. Tom tom. Location pointer as icon. Navigational company.'
          }
        />
        <CustomerLogoCol
          src={secoundCompanyPicture}
          alt={
            'Company logo. Tom tom. Location pointer as icon. Navigational company.'
          }
        />
        <CustomerLogoCol
          src={thirdCompanyPicture}
          alt={
            'Company logo. Tom tom. Location pointer as icon. Navigational company.'
          }
        />
        <CustomerLogoCol
          src={forthCompanyPicture}
          alt={
            'Company logo. Tom tom. Location pointer as icon. Navigational company.'
          }
        />
      </Row>
    </Container>
  );
};
