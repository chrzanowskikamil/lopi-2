'use client';

import { Breadcrumbs, CountableArray } from '@lopi-2/common';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FC, useCallback, useMemo } from 'react';
import { SortOrder, SortParams } from './CategoriesEnums';

import { CrumbsFactory } from '@lopi-2/common';
import { FetchedCategoryResponse } from '../../../types/FetchedCategoryResponse';
import { FiltersModal } from './FiltersModal';
import { INITIAL_ASCENDING_VALUE } from './CategoriesVariables';
import { ProductsDisplay } from '../Products/ProductsDisplay/ProductsDisplay';
import { ProductsResponse } from '../../../types/ProductsResponse';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { getProducts } from '../../../actions/getProducts';
import { loadMoreProducts } from './useCategoriesPagination';
import styles from './Categories.module.scss';
import { useCategoriesReducer } from './useCategoriesReducer';

interface CategoriesProps {
  title: string;
  categories: FetchedCategoryResponse[];
  products: ProductsResponse | undefined;
  categoryUUID: string;
  productCounts: CountableArray;
}

export const Categories: FC<CategoriesProps> = ({
  title,
  categories,
  products: initalProducts,
  categoryUUID,
  productCounts,
}) => {
  const categoriesReducer = useCategoriesReducer(initalProducts?.content);
  const sortProductsByParams = useCallback(
    async (sortParam: string) => {
      const sortParams = sortParam;

      let orderColumn = SortOrder.PRICE;
      let ascending = INITIAL_ASCENDING_VALUE;

      if (sortParams === SortParams.PRICE_ASC) {
        orderColumn = SortOrder.PRICE;
        ascending = true;
      } else if (sortParams === SortParams.PRICE_DSC) {
        orderColumn = SortOrder.PRICE;
        ascending = false;
      } else if (sortParams === SortParams.PRODUCT_NAME_ASC) {
        orderColumn = SortOrder.NAME;
        ascending = true;
      } else if (sortParams === SortParams.PRODUCT_NAME_DSC) {
        orderColumn = SortOrder.NAME;
        ascending = false;
      }

      const newSort = await getProducts(categoryUUID, {
        sortOrder: orderColumn,
        ascending: ascending,
      });

      if (newSort) {
        categoriesReducer.onProductsSort(
          [...newSort.content],
          orderColumn,
          ascending
        );
      }
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
        <Col className={styles.filterButtonsMobile}>
          <FiltersModal>
            <Sidebar
              onSidebarFilter={categoriesReducer.onSidebarFilter}
              activeCategory={title}
              categories={categories}
              productCountInCategories={productCounts}
            />
          </FiltersModal>
          <SortDropdown sortedProducts={sortProductsByParams} />
        </Col>
      </Row>
      <Row>
        <Col className={styles.sortButtonDesktop}>
          <SortDropdown sortedProducts={sortProductsByParams} />
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-lg-flex" lg={4}>
          <Sidebar
            onSidebarFilter={categoriesReducer.onSidebarFilter}
            activeCategory={title}
            categories={categories}
            productCountInCategories={productCounts}
          />
        </Col>
        <Col lg={8}>
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
