'use client';

import { FC } from 'react';

import style from '../tileShop.module.scss';

type PriceProps = {
  price: number;
  currentPrice: number | undefined;
};

const Price: FC<PriceProps> = ({ price, currentPrice }) => {
  return (
    <div className={style.productPrice}>
      {currentPrice ? (
        <>
          <div className={style.previousPrice}>{price} zł</div>
          <div className={style.currentPrice}>{currentPrice} zł</div>
        </>
      ) : (
        <div className={style.normalPrice}>{price} zł</div>
      )}
    </div>
  );
};

export default Price;
