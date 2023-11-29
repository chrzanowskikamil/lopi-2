'use client';

import {
  AppRoutes,
  CountableArray,
  MultiRangeSlider,
  RangeSliderValues,
  useSearchParams,
} from '@lopi-2/common';
import { Badge, Form, ListGroup } from 'react-bootstrap';

import { FC } from 'react';
import { FetchedCategoryResponse } from '../../../../../types/FetchedCategoryResponse';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { useCategoriesContext } from '../../../../contexts/CategoriesContext';

interface SidebarProps {
  activeCategory: string;
  categories: FetchedCategoryResponse[];
  productCountInCategories: CountableArray;
}

export const Sidebar: FC<SidebarProps> = ({
  activeCategory,
  categories,
  productCountInCategories,
}) => {
  const { categoriesReducer } = useCategoriesContext();
  const { applyParams, params } = useSearchParams();

  const getItemClassName = (item: string) =>
    activeCategory === item ? styles.activeListItem : styles.listItem;

  const getBadgeClassName = (item: string) =>
    activeCategory === item ? styles.activeBadge : styles.badge;

  const renderedList = categories.map((item, i) => (
    <ListGroup.Item
      active={false}
      className={getItemClassName(item.name)}
      key={item.name}
      as={Link}
      href={AppRoutes.getSpecifedCategoryPath(item.name) + location.search}
      passHref
    >
      {item.name}
      <Badge bg="none" className={getBadgeClassName(item.name)}>
        {productCountInCategories !== undefined
          ? productCountInCategories[i].count
          : '?'}
      </Badge>
    </ListGroup.Item>
  ));

  const handleRangeSlider = (e: RangeSliderValues) => {
    if (params.minPrice !== e.minValue) {
      applyParams({ minPrice: e.minValue });
    }
    if (params.maxPrice !== e.maxValue) {
      applyParams({ maxPrice: e.maxValue });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Kategorie</h2>

      <ListGroup as="ol" className={styles.categoryList}>
        {renderedList}
      </ListGroup>
      <h3 className={styles.title}>Cena</h3>
      <MultiRangeSlider
        categoriesReducer={categoriesReducer}
        params={params}
        onChange={(e: RangeSliderValues) => handleRangeSlider(e)}
      />

      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="productAvailabilitySwitch"
        onChange={() => {
          return applyParams({ availability: !params.availability });
        }}
        checked={params.availability}
      />
    </aside>
  );
};
