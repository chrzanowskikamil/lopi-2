'use client';

import styles from './Categories.module.scss';
import { FC, useCallback } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { ProductsDisplay } from '../Products/ProductsDisplay/ProductsDisplay';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { getProducts } from '../../../actions/getProducts';

import { SortType, SortOrder, SortParams } from './CategoriesEnums';

import { useCategoriesReducer } from './useCategoriesReducer';

import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from './CategoriesVariables';

import { loadMoreProducts } from './useCategoriesPagination';
import { ProductsResponse } from '../../../../shop/types/ProductsResponse';

interface CategoriesProps {
  title: string;
  content: string[];
  products: ProductsResponse;
}

export const Categories: FC<CategoriesProps> = ({
  title,
  content,
  products: initalProducts,
}) => {
  const categoriesReducer = useCategoriesReducer(initalProducts);

  const sortProductsByParams = useCallback(
    async (sortParam: string) => {
      const sortParams = sortParam;

      let sortType = SortType.PRICE;
      let sortOrder = SortOrder.ASCENDING;

      if (sortParams === SortParams.PRICE_ASC) {
        sortType = SortType.PRICE;
        sortOrder = SortOrder.ASCENDING;
      } else if (sortParams === SortParams.PRICE_DSC) {
        sortType = SortType.PRICE;
        sortOrder = SortOrder.DESCENDING;
      } else if (sortParams === SortParams.PRODUCT_NAME_ASC) {
        sortType = SortType.NAME;
        sortOrder = SortOrder.ASCENDING;
      } else if (sortParams === SortParams.PRODUCT_NAME_DSC) {
        sortType = SortType.NAME;
        sortOrder = SortOrder.DESCENDING;
      }

      const newSort = await getProducts(
        DEFAULT_PAGE_SIZE,
        INITIAL_CURRENT_PAGE,
        sortType,
        sortOrder
      );

      categoriesReducer.onProductsSort(
        [...newSort.products],
        sortType,
        sortOrder
      );
    },
    [categoriesReducer]
  );

  return (
    <Container>
      <Row>
        <Col>
          <h1 className={styles.title}>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Breadcrumbs category={title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SortDropdown sortedProducts={sortProductsByParams} />
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <Sidebar
            onSidebarFilter={categoriesReducer.onSidebarFilter}
            activeCategory={title}
            list={content}
          />
        </Col>
        <Col xl={10}>
          <ProductsDisplay
            onProductsDisplay={categoriesReducer.onProductsDisplay}
          />
          <Col className="text-center">
            <Button
              className={styles.button}
              onClick={() =>
                loadMoreProducts(categoriesReducer.onLoadMoreProducts)
              }
            >
              pokaż więcej
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
