import { Row } from 'react-bootstrap';
import ProductTileCol from '../../../components/tileShop/ProductTileCol';
import style from './similarProducts.module.scss';
import { FC } from 'react';
import { getProduct } from '../../../../../../../shop/actions/getProduct';

export const SimilarProducts: FC = async () => {
  const productOne = await getProduct('e2c5684c-b5ff-4b35-98b6-110a3f832dd7');
  const productTwo = await getProduct('143a761d-2015-48fb-96bf-b02e04752bd4');
  const productThree = await getProduct('b5fba84e-1729-4d99-8412-8421d44a2a85');

  return (
    <div className={style.similarProducts}>
      <span>Podobne produkty</span>
      <div className={style.container}>
        <Row className={style.products}>
          <ProductTileCol product={productOne} />
          <ProductTileCol product={productTwo} />
          <ProductTileCol product={productThree} />
        </Row>
      </div>
    </div>
  );
};
