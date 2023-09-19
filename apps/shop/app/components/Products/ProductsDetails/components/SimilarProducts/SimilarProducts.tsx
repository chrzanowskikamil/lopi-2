import { Row } from 'react-bootstrap';
import ProductTileCol from '../../../components/tileShop/ProductTileCol';
import style from './similarProducts.module.scss';
import { FC } from 'react';
import { Product } from '../../../../../../types/ProductsResponse';

interface SimilarProductsProps {
  productArray: Product[];
}

export const SimilarProducts: FC<SimilarProductsProps> = ({ productArray }) => {
  return (
    <div className={style.similarProducts}>
      <span>Podobne produkty</span>
      <div className={style.container}>
        <Row className={style.products}>
          {productArray.map((el, index) => (
            <ProductTileCol product={el} col={3} key={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};
