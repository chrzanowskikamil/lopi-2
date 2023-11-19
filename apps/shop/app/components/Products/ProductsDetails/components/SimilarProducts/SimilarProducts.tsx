import { FC } from 'react';
import { Product } from '../../../../../../types/ProductsResponse';
import ProductTileCol from '../../../components/tileShop/ProductTileCol';
import { Row } from 'react-bootstrap';
import style from './similarProducts.module.scss';

interface SimilarProductsProps {
  similarProducts: (Product | null)[];
}

export const SimilarProducts: FC<SimilarProductsProps> = ({
  similarProducts,
}) => {
  return (
    <div className={style.similarProducts}>
      <span>Podobne produkty</span>
      <div className={style.container}>
        <Row className={style.products}>
          {similarProducts.map((product, i) =>
            product !== null ? (
              <ProductTileCol product={product} col={3} key={i} index={i} />
            ) : null
          )}
        </Row>
      </div>
    </div>
  );
};
