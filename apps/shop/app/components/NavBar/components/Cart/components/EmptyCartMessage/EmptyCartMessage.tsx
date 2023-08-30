'use client';
import style from './EmptyCartMessage.module.scss';
import { Container } from 'react-bootstrap';

import { FC } from 'react';
import { IconWrapper } from '../../../../../Icons/IconWrapper';

export const EmptyCartMessage: FC = () => {
  return (
    <Container className={style.body}>
      <div className={style.icon}>
        <IconWrapper icon={<i className="bi bi-cart3" />} />
      </div>
      <h1 className={style.title}>Twój koszyk jest pusty</h1>
      <p>Dodaj produkty do koszyka, aby móc je kupić.</p>
    </Container>
  );
};
