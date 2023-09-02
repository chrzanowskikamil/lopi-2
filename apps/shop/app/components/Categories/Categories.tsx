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

import { useSearchParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
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
  const THE_HIGHEST_MONEY_VALUE = 160;
  const PRODUCTS_PER_PAGE = 4;

  const THE_HIGHEST_MONEY_VALUE = 160;
  const PRODUCTS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(0);
  const [allProducts, setAllProducts] = useState(initalProducts.products);
  const [sortType, setSortType] = useState('regularPrice');
  const [sortOrder, setSortOrder] = useState('asc');
  const searchParams = useSearchParams();

  const changeToNumber = (param: string | null) => {
    if (param !== null) {
      return parseInt(param);
    } else return 0;
  };

  const [lowerMoneyValue, setLowerMoneyValue] = useState<number>(
    searchParams.get('filterPriceLow') !== null
      ? changeToNumber(searchParams.get('filterPriceLow'))
      : 0
  );
  const [higherMoneyValue, setHigherMoneyValue] = useState<number>(
    searchParams.get('filterPriceHigh') !== null
      ? changeToNumber(searchParams.get('filterPriceHigh'))
      : THE_HIGHEST_MONEY_VALUE
  );
  const searchParams = useSearchParams();

  const changeToNumber = (param: string | null) => {
    if (param !== null) {
      return parseInt(param);
    } else return 0;
  };

  const [lowerMoneyValue, setLowerMoneyValue] = useState<number>(
    searchParams.get('filterPriceLow') !== null
      ? changeToNumber(searchParams.get('filterPriceLow'))
      : 0
  );
  const [higherMoneyValue, setHigherMoneyValue] = useState<number>(
    searchParams.get('filterPriceHigh') !== null
      ? changeToNumber(searchParams.get('filterPriceHigh'))
      : THE_HIGHEST_MONEY_VALUE
  );

  const [availability, setAvailability] = useState<boolean>(() =>
    searchParams.get('availability') === 'false' ? false : true
  );
  const [availability, setAvailability] = useState<boolean>(() =>
    searchParams.get('availability') === 'false' ? false : true
  );

  const sortProductsByParams = async (item: string) => {
    setCurrentPage(0);
    const sortParams = item;

    let sortType = 'regularPrice';
    let sortOrder = 'asc';

    let sortType = 'regularPrice';
    let sortOrder = 'asc';
    if (sortParams === 'Cena rosnaca') {
      sortType = 'regularPrice';
      sortOrder = 'asc';
      sortType = 'regularPrice';
      sortOrder = 'asc';
    } else if (sortParams === 'Cena malejaca') {
      sortType = 'regularPrice';
      sortOrder = 'desc';
      sortType = 'regularPrice';
      sortOrder = 'desc';
    } else if (sortParams === 'Alfabetycznie A do Z') {
      sortType = 'name';
      sortOrder = 'asc';
      sortType = 'name';
      sortOrder = 'asc';
    } else if (sortParams === 'Alfabetycznie Z do A') {
      sortType = 'name';
      sortOrder = 'desc';
      sortType = 'name';
      sortOrder = 'desc';
    }

    const newSort = await getProducts(
      PRODUCTS_PER_PAGE,
      currentPage,
      sortType,
      sortOrder
    );

    console.table(
      await getProducts(PRODUCTS_PER_PAGE, currentPage, sortType, sortOrder)
    );
    setSortType(sortType);
    setSortOrder(sortOrder);
    setAllProducts([...newSort.products]);
  };

    const newSort = await getProducts(
      PRODUCTS_PER_PAGE,
      currentPage,
      sortType,
      sortOrder
    );
    setAllProducts([...newSort.products]);
  };

  const loadMoreProducts = async () => {
    const nextPage = currentPage + 1;
    const newProducts = await getProducts(
      PRODUCTS_PER_PAGE,
      nextPage,
      sortType,
      sortOrder
    );
    setAllProducts([...allProducts, ...newProducts.products]);
    setCurrentPage(nextPage);

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
          <SortDropdown sort={sortProductsByParams} />
        </Col>
      </Row>
      <Row>
        <Col xl={2}>
          <Sidebar
            activeCategory={title}
            list={content}
            availability={availability}
            setAvailability={setAvailability}
            higherMoneyValue={higherMoneyValue}
            lowerMoneyValue={lowerMoneyValue}
            setHigherMoneyValue={setHigherMoneyValue}
            setLowerMoneyValue={setLowerMoneyValue}
          />
          <Sidebar
            activeCategory={title}
            list={content}
            availability={availability}
            setAvailability={setAvailability}
            higherMoneyValue={higherMoneyValue}
            lowerMoneyValue={lowerMoneyValue}
            setHigherMoneyValue={setHigherMoneyValue}
            setLowerMoneyValue={setLowerMoneyValue}
          />
        </Col>
        <Col xl={10}>
          <Products
            products={{ ...initalProducts, products: allProducts }}
            priceToFilterByLow={lowerMoneyValue}
            priceToFilterByHigh={higherMoneyValue}
            availabilityToFilterBy={availability}
          />
          <Products
            products={{ ...initalProducts, products: allProducts }}
            priceToFilterByLow={lowerMoneyValue}
            priceToFilterByHigh={higherMoneyValue}
            availabilityToFilterBy={availability}
          />
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
