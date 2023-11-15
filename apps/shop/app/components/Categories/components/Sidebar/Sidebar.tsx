'use client';

import {
  AppRoutes,
  CountableArray,
  MultiRangeSlider,
  RangeSliderValues,
} from '@lopi-2/common';
import { Badge, Form, ListGroup } from 'react-bootstrap';

import { FC } from 'react';
import { FetchedCategoryResponse } from '../../../../../types/FetchedCategoryResponse';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  onSidebarFilter: {
    onAvailabilityFilterChange: (param: boolean) => void;
    availability: boolean;
    minPriceFilterValue: number;
    maxPriceFilterValue: number;
    onLowerMoneyValueFilterChange: (param: number) => void;
    onHigherMoneyValueFilterChange: (param: number) => void;
  };
  activeCategory: string;
  categories: FetchedCategoryResponse[];
  productCountInCategories: CountableArray;
}

export const Sidebar: FC<SidebarProps> = ({
  onSidebarFilter,
  activeCategory,
  categories,
  productCountInCategories,
}) => {
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
    if (onSidebarFilter.minPriceFilterValue !== e.minValue) {
      onSidebarFilter.onLowerMoneyValueFilterChange(e.minValue);
    }
    if (onSidebarFilter.maxPriceFilterValue !== e.maxValue) {
      onSidebarFilter.onHigherMoneyValueFilterChange(e.maxValue);
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
        minValue={onSidebarFilter.minPriceFilterValue}
        maxValue={onSidebarFilter.maxPriceFilterValue}
        // TODO: it should pass value based on the max price of the visible products
        maxValueLimit={200}
        onChange={(e: RangeSliderValues) => handleRangeSlider(e)}
      />

      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="productAvailabilitySwitch"
        onChange={() =>
          onSidebarFilter.onAvailabilityFilterChange(
            !onSidebarFilter.availability
          )
        }
        checked={onSidebarFilter.availability}
      />
    </aside>
  );
};
