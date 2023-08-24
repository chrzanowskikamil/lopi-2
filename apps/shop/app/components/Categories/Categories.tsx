'use client';
import styles from './Categories.module.scss';
import { FC, useState } from 'react';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SortDropdown } from './components/SortDropdown/SortDropdown';
import { Products } from './components/Products/Products';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductsResponse } from 'apps/shop/types/ProductsResponse';
import { getProducts } from 'apps/shop/actions/getProducts';

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
  const [currentPage, setCurrentPage] = useState(0);
  const [allProducts, setAllProducts] = useState(initalProducts.products);
  const PRODUCTS_PER_PAGE = 6;

  const loadMoreProducts = async () => {
    const nextPage = currentPage + 1;
    const newProducts = await getProducts(PRODUCTS_PER_PAGE, nextPage);
    setAllProducts([...allProducts, ...newProducts.products]);
    setCurrentPage(nextPage);
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
          <SortDropdown />
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <Sidebar activeCategory={title} list={content} />
        </Col>
        <Col xl={10}>
          <Products products={{ ...initalProducts, products: allProducts }} />
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
