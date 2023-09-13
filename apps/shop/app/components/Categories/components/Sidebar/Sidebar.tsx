'use client';

import styles from './Sidebar.module.scss';
import { Badge, Form, ListGroup } from 'react-bootstrap';

import { FC } from 'react';
import Link from 'next/link';

import MultiRangeSlider, {
  RangeSliderValues,
} from '../MultiRangeSlider/MultiRangeSlider';
import { useState } from 'react';

import {
  THE_HIGHEST_MONEY_VALUE,
  THE_LOWEST_MONEY_VALUE,
} from '../../CategoriesVariables';

interface SidebarProps {
  onSidebarFilter: {
    onAvailabilityFilterChange: (param: boolean) => void;
    availability: boolean;
    lowerMoneyValueFilter: number;
    onLowerMoneyValueFilterChange: (param: number) => void;
    higherMoneyValueFilter: number;
    onHigherMoneyValueFilterChange: (param: number) => void;
  };
  activeCategory: string;
  list: string[];
}

export const Sidebar: FC<SidebarProps> = ({
  onSidebarFilter,
  activeCategory,
  list,
}) => {
  const [setup, setSetup] = useState<boolean>();

  const setupFunction = () => {
    const url = new URL(location.href);

    if (url.searchParams.get('availability') === 'false') {
      onSidebarFilter.onAvailabilityFilterChange(false);
    }
    setSetup(true);
  };

  if (!setup) {
    setupFunction();
  }

  const getItemClassName = (item: string) =>
    activeCategory === item ? styles.activeListItem : styles.listItem;

  const getBadgeClassName = (item: string) =>
    activeCategory === item ? styles.activeBadge : styles.badge;

  const renderedList = list.map((item) => (
    <ListGroup.Item
      active={false}
      className={getItemClassName(item)}
      key={item}
      as={Link}
      href={`/category/${item}`}
      passHref
    >
      {item}
      <Badge bg="none" className={getBadgeClassName(item)}>
        3
      </Badge>
    </ListGroup.Item>
  ));

  const goToQueryStringHref = (query: string, value: string) => {
    const url = new URL(location.href);
    url.searchParams.set(`${query}`, `${value}`);
    history.pushState({}, '', url);
  };

  const handleRangeSlider = (e: RangeSliderValues) => {
    const url = new URL(location.href);
    if (onSidebarFilter.lowerMoneyValueFilter !== e.min) {
      if (url.searchParams.get('filterPriceLow') !== e.min.toString()) {
        onSidebarFilter.onLowerMoneyValueFilterChange(e.min);
        goToQueryStringHref('filterPriceLow', e.min.toString());
      }
    }
    if (onSidebarFilter.higherMoneyValueFilter !== e.max) {
      if (url.searchParams.get('filterPriceHigh') !== e.max.toString()) {
        onSidebarFilter.onHigherMoneyValueFilterChange(e.max);
        goToQueryStringHref('filterPriceHigh', e.max.toString());
      }
    }
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Kategorie</h2>
      <ListGroup as="ol" className={styles.categoryList}>
        {renderedList}
      </ListGroup>
      <MultiRangeSlider
        min={THE_LOWEST_MONEY_VALUE}
        max={THE_HIGHEST_MONEY_VALUE}
        onChange={(e: RangeSliderValues) => handleRangeSlider(e)}
      />
      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="productAvailabilitySwitch"
        onChange={() => {
          onSidebarFilter.onAvailabilityFilterChange(
            !onSidebarFilter.availability
          );
          goToQueryStringHref(
            'availability',
            (!onSidebarFilter.availability).toString()
          );
        }}
        checked={onSidebarFilter.availability}
      />
    </aside>
  );
};
