'use client';

import styles from './Categories.module.scss';
import { FC } from 'react';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { Products } from './components/Products/Products';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductsResponse } from '../../../types/ProductsResponse';
import { getProducts } from '../../../actions/getProducts';

import { useCategoriesReducer } from './CategoriesReducerHook';

interface CategoriesProps {
  title: string;
  content: string[];
  products: ProductsResponse;
  newSort: ProductsResponse;
}

export const Categories: FC<CategoriesProps> = ({
  title,
  content,
  products: initalProducts,
}) => {
  const categoriesReducer = useCategoriesReducer(initalProducts);

  const PRODUCTS_PER_PAGE = 4;

  const sortProductsByParams = async (item: string) => {
    const sortParams = item;

    let sortType = 'regularPrice';
    let sortOrder = 'asc';

    if (sortParams === 'Cena rosnaca') {
      sortType = 'regularPrice';
      sortOrder = 'asc';
    } else if (sortParams === 'Cena malejaca') {
      sortType = 'regularPrice';
      sortOrder = 'desc';
    } else if (sortParams === 'Alfabetycznie A do Z') {
      sortType = 'name';
      sortOrder = 'asc';
    } else if (sortParams === 'Alfabetycznie Z do A') {
      sortType = 'name';
      sortOrder = 'desc';
    }

    const newSort = await getProducts(
      PRODUCTS_PER_PAGE,
      0,
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
      PRODUCTS_PER_PAGE,
      nextPage,
      categoriesReducer.state.sortType,
      categoriesReducer.state.sortOrder
    );

    categoriesReducer.onShowMore(
      [...categoriesReducer.state.allProducts, ...newProducts.products],
      nextPage
    );

    return;
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
