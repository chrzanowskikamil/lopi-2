'use client';

import style from './tileShop.module.scss';

import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

import Stars from './components/Stars';
import Price from './components/Price';

import Status from './components/Status';
import AddToCart from './components/AddtoCart';

type TileProps = {
  picture: string | StaticImageData;
  stars: number;
  rewievs: number;
  name: string;
  price: number;
  currentPrice: number | undefined;
  status: string | undefined;
};

const Tile: FC<TileProps> = ({
  picture,
  stars,
  rewievs,
  name,
  price,
  currentPrice,
  status,
}) => {
  return (
    <ul className={style.tile}>
      <div className={style.imageArea}>
        <Status status={status} />
        <AddToCart />
        <Image src={picture} alt="picture" width={330} height={330} />
      </div>
      <div className={style.tileInfo}>
        <Stars starsCount={stars} />
        <span>({rewievs})</span>
      </div>
      <div className={style.productName}>{name}</div>
      <Price price={price} currentPrice={currentPrice} />
    </ul>
  );
};

export default Tile;