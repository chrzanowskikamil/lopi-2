'use client';
import style from './EmptyCartMessage.module.scss';
import { Container } from 'react-bootstrap';
import { CartIcon } from 'apps/shop/app/assets/SvgIcons/CartIcon';

import { FC } from 'react';

export const EmptyCartMessage: FC = () => {
  return (
    <Container className={style.body}>
      <div className={style.icon}>
        <CartIcon />
      </div>
      <h1 className={style.title}>Twój koszyk jest pusty</h1>
      <p>Dodaj produkty do koszyka, aby móc je kupić.</p>
    </Container>
  );
};
