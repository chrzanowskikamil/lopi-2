import Tile from './tile';

import style from './tileShop.module.scss';

import picture from './pictures/picture.png';
import pictureTwo from './pictures/picture2.png';
import pictureThree from './pictures/picture3.png';

const TileDisplay = () => {
  return (
    <li className={style.tileContainer}>
      <Tile
        picture={picture}
        stars={4}
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
    </li>
  );
};

export default TileDisplay;
