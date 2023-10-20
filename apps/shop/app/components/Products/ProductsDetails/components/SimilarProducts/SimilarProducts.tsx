import { FC } from 'react';
import { Product } from '../../../../../../types/ProductsResponse';
import ProductTileCol from '../../../components/tileShop/ProductTileCol';
import { Row } from 'react-bootstrap';
import style from './similarProducts.module.scss';

interface SimilarProductsProps {
  similarProducts: Product[];
}

export const SimilarProducts: FC<SimilarProductsProps> = ({
  similarProducts,
}) => {
  return (
    <div className={style.similarProducts}>
      <span>Podobne produkty</span>
      <div className={style.container}>
        <Row className={style.products}>
          {similarProducts.map((el, i) => (
            <ProductTileCol product={el} col={3} key={i} index={i} />
          ))}
        </Row>
      </div>
    </div>
  );
};
