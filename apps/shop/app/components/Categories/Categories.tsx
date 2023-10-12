'use client';

import { Ascending, SortOrder, SortParams } from './CategoriesEnums';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from './CategoriesVariables';
import { FC, useCallback, useMemo } from 'react';

import { Breadcrumbs } from '@lopi-2/common';
import { CrumbsFactory } from '@lopi-2/common';
import { FetchedCategoryResponse } from '../../../../shop/types/FetchedCategoryResponse';
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
  categories: FetchedCategoryResponse[];
  products: ProductsResponse;
  categoryUUID: string;
}

export const Categories: FC<CategoriesProps> = ({
  title,
  categories,
  products: initalProducts,
  categoryUUID,
}) => {
  const categoriesReducer = useCategoriesReducer(initalProducts);

  const sortProductsByParams = useCallback(
    async (sortParam: string) => {
      const sortParams = sortParam;

      let orderColumn = SortOrder.PRICE;
      let ascending = Ascending.ASCENDING;

      if (sortParams === SortParams.PRICE_ASC) {
        orderColumn = SortOrder.PRICE;
        ascending = Ascending.ASCENDING;
      } else if (sortParams === SortParams.PRICE_DSC) {
        orderColumn = SortOrder.PRICE;
        ascending = Ascending.DESCENDING;
      } else if (sortParams === SortParams.PRODUCT_NAME_ASC) {
        orderColumn = SortOrder.NAME;
        ascending = Ascending.ASCENDING;
      } else if (sortParams === SortParams.PRODUCT_NAME_DSC) {
        orderColumn = SortOrder.NAME;
        ascending = Ascending.DESCENDING;
      }

      const newSort = await getProducts(categoryUUID, {
        sortOrder: orderColumn,
        ascending: ascending,
      });

      categoriesReducer.onProductsSort(
        [...newSort.content],
        orderColumn,
        ascending
      );
    },
    [categoriesReducer, categoryUUID]
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
            categories={categories}
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
                loadMoreProducts(
                  categoriesReducer.onLoadMoreProducts,
                  categoryUUID
                )
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
