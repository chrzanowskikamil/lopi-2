import { Container, Row } from 'react-bootstrap';

import { ChildrenFC } from '@lopi-2/common';
import { Product } from '../../../../types/ProductsResponse';
import ProductTileCol from '../components/tileShop/ProductTileCol';
import style from './Products.module.scss';
import { useCategoriesContext } from '../../../contexts/CategoriesContext';
import { useSearchParams } from '@lopi-2/common';

export const ProductsDisplay: ChildrenFC = () => {
  const { categoriesReducer } = useCategoriesContext();
  const { allProducts } = categoriesReducer.onProductsDisplay;
  const { params } = useSearchParams();

  const RenderedProducts = allProducts.map((product: Product, i: number) => {
    if (
      params.maxPrice < product.regularPrice ||
      params.minPrice >= product.regularPrice
    )
      return;
    else
      return (
        <ProductTileCol
          col={4}
          product={product}
          key={product.uid}
          index={i}
          cartContextId={'Categories render.'}
        />
      );
  });
  if (allProducts === undefined) {
    return (
      <>
        <Container>
          <Row>
            <h3 className="d-flex pt-5 w-100 justify-content-center">
              There are no products in this category
            </h3>
          </Row>
        </Container>
      </>
    );
  } else if (allProducts !== undefined)
    return (
      <>
        <Container>
          <Row className={style.products}>{...RenderedProducts}</Row>
        </Container>
      </>
    );
};
