'use client';

import { FC } from 'react';

import style from '../tileProduct.module.scss';

const AddToCart: FC = () => {
  return (
    <>
      <button className={style.buttonToCart}>add to cart</button>
    </>
  );
};

export default AddToCart;
