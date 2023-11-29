'use client';

import {
  Breadcrumbs,
  CountableArray,
  CrumbsFactory,
  useSearchParams,
} from '@lopi-2/common';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FC, useEffect, useMemo } from 'react';

import { FetchedCategoryResponse } from '../../../types/FetchedCategoryResponse';
import { FiltersModal } from './FiltersModal';
import { ProductsDisplay } from '../Products/ProductsDisplay/ProductsDisplay';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { loadMoreProducts } from './useCategoriesPagination';
import styles from './Categories.module.scss';
import { useCategoriesContext } from '../../contexts/CategoriesContext';

interface CategoriesProps {
  title: string;
  categories: FetchedCategoryResponse[];
  categoryUUID: string;
  productCounts: CountableArray;
}

export const Categories: FC<CategoriesProps> = ({
  title,
  categories,
  categoryUUID,
  productCounts,
}) => {
  const { categoriesReducer, handleChangeParams } = useCategoriesContext();

  const { currentPage, allProducts, onShowMore } =
    categoriesReducer.onLoadMoreProducts;

  const { params } = useSearchParams();

  useEffect(() => {
    handleChangeParams(params, categoryUUID);
  }, []);

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
              activeCategory={title}
              categories={categories}
              productCountInCategories={productCounts}
            />
          </FiltersModal>
          <SortDropdown />
        </Col>
      </Row>
      <Row>
        <Col className={styles.sortButtonDesktop}>
          <SortDropdown />
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-lg-flex" lg={4}>
          <Sidebar
            activeCategory={title}
            categories={categories}
            productCountInCategories={productCounts}
          />
        </Col>
        <Col xl={8}>
          <ProductsDisplay />
          <Col className="text-center">
            <Button
              className={styles.button}
              onClick={() => {
                loadMoreProducts(
                  params,
                  {
                    currentPage,
                    allProducts,
                    onShowMore,
                  },
                  categoryUUID
                );
              }}
            >
              pokaż więcej
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
