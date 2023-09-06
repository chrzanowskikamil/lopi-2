'use client';

import styles from './Categories.module.scss';
import { FC } from 'react';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { Products } from './components/Products/Products';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { getProducts } from '../../../actions/getProducts';

import { SortType, SortOrder, SortParams } from './CategoriesEnums';

import { useCategoriesReducer } from './CategoriesReducerHook';

import { DEFAULT_PAGE_SIZE, INITIAL_CURRENT_PAGE } from './CategoriesVariables';
import { CategoriesProps } from './CategoriesTypesProps';

export const Categories: FC<CategoriesProps> = ({
  title,
  content,
  products: initalProducts,
}) => {
  const categoriesReducer = useCategoriesReducer(initalProducts);

  const sortProductsByParams = async (sortParam: string) => {
    const sortParams = sortParam;

    let sortType = SortType.PRICE;
    let sortOrder = SortOrder.ASCENDING;
    if (sortParams === SortParams.PRICE_INCREASING) {
      sortType = SortType.PRICE;
      sortOrder = SortOrder.ASCENDING;
    } else if (sortParams === SortParams.PRICE_DECREASING) {
      sortType = SortType.PRICE;
      sortOrder = SortOrder.DESCENDING;
    } else if (sortParams === SortParams.ALFABEICLY_INCREASING) {
      sortType = SortType.NAME;
      sortOrder = SortOrder.ASCENDING;
    } else if (sortParams === SortParams.ALFABEICLY_DECREASING) {
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
  };

  const loadMoreProducts = async () => {
    const nextPage = categoriesReducer.state.currentPage + 1;

    const newProducts = await getProducts(
      DEFAULT_PAGE_SIZE,
      nextPage,
      categoriesReducer.state.sortType,
      categoriesReducer.state.sortOrder
    );

    categoriesReducer.onShowMore(
      [...categoriesReducer.state.allProducts, ...newProducts.products],
      nextPage
    );
  };

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
          <SortDropdown sort={sortProductsByParams} />
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <Sidebar
            categoriesReducer={categoriesReducer}
            activeCategory={title}
            list={content}
          />
        </Col>
        <Col xl={10}>
          <Products categoriesReducer={categoriesReducer} />
          <Col className="text-center">
            <Button className={styles.button} onClick={loadMoreProducts}>
              pokaż więcej
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
