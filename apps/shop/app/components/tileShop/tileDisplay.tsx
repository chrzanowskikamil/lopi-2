'use client';

import Tile from './tile';

import style from './tileShop.module.scss';

import picture from './pictures/picture.png';
import pictureTwo from './pictures/picture2.png';
import pictureThree from './pictures/picture3.png';
import pictureFour from './pictures/picture4.png';
import pictureFive from './pictures/picture5.png';
import pictureSix from './pictures/picture6.png';

const TileDisplay = () => {
  return (
    <li className={style.tileContainer}>
      <Tile
        picture={picture}
        stars={2}
        rewievs={3}
        name={'Ethiopia Emerald'}
        price={150}
        currentPrice={120}
        status={'-20%'}
      />
      <Tile
        picture={pictureTwo}
        stars={5}
        rewievs={10}
        name={'Ethiopia Tradition'}
        price={90}
        currentPrice={undefined}
        status={'new'}
      />
      <Tile
        picture={pictureThree}
        stars={0}
        rewievs={0}
        name={'Ethiopia Emerald'}
        price={120}
        currentPrice={102}
        status={'-15%'}
      />
      <Tile
        picture={pictureFour}
        stars={2}
        rewievs={1}
        name={'Ethiopia Sunrise'}
        price={80}
        currentPrice={72}
        status={'-10%'}
      />
      <Tile
        picture={pictureFive}
        stars={2}
        rewievs={5}
        name={'Ethiopia Aroma'}
        price={150}
        currentPrice={undefined}
        status={undefined}
      />
      <Tile
        picture={pictureSix}
        stars={5}
        rewievs={6}
        name={'Ethiopia Adventure'}
        price={160}
        currentPrice={128}
        status={'-20%'}
      />
    </li>
  );
};

export default TileDisplay;
