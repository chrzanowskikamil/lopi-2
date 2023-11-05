'use client';
import style from './EmptyCartMessage.module.scss';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { IconWrapper } from '../../../Icons/IconWrapper';

export const EmptyCartMessage: FC = () => {
  return (
    <Container className={style.body}>
      <section className={style.icon}>
        <IconWrapper icon={<i className="bi bi-cart3" aria-label="cart" />} />
      </section>
      <h1 className={style.title}>Twój koszyk jest pusty</h1>
      <p>Dodaj produkty do koszyka, aby móc je kupić.</p>
    </Container>
  );
};
