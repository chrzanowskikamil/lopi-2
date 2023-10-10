'use client';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from './CategoriesVariables';
import { FC, useCallback, useMemo } from 'react';
import { SortOrder, SortParams, SortType } from './CategoriesEnums';

import { Breadcrumbs } from '@lopi-2/common';
import { CrumbsFactory } from '@lopi-2/common';
import { ProductsDisplay } from '../Products/ProductsDisplay/ProductsDisplay';
import { ProductsResponse } from '../../../../shop/types/ProductsResponse';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { getProducts } from '../../../actions/getProducts';
import { loadMoreProducts } from './useCategoriesPagination';
import styles from './Categories.module.scss';
import { useCategoriesReducer } from './useCategoriesReducer';

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
        [...newSort.content],
        sortType,
        sortOrder
      );
    },
    [categoriesReducer]
  );

  const crumbs = useMemo(
    () => CrumbsFactory.createSpecifedCategoryCrumb(title),
    [title]
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
          <Breadcrumbs crumbs={crumbs} />
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
