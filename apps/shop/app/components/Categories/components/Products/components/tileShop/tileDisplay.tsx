'use client';

import ProductTile from './productTile';

import style from './tileShop.module.scss';

import { products } from './products';

const TileDisplay = () => {
  const productsDisplay: Array<React.ReactElement> = [];

  for (let i = 0; i < products.length; i++) {
    productsDisplay.push(
      <ProductTile
        id={products[i].id}
        key={i}
        picture={products[i].picture}
        stars={products[i].stars}
        rewievs={products[i].rewievs}
        name={products[i].name}
        price={products[i].price}
        currentPrice={products[i].currentPrice}
        status={products[i].status}
      />
    );
  }

  return <li className={style.tileContainer}>{productsDisplay}</li>;
};

export default TileDisplay;
