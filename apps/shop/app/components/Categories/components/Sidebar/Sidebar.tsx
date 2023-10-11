'use client';

import { Badge, Form, ListGroup } from 'react-bootstrap';
import { FC, useEffect } from 'react';
import MultiRangeSlider, {
  RangeSliderValues,
} from '../MultiRangeSlider/MultiRangeSlider';
import {
  THE_HIGHEST_MONEY_VALUE,
  THE_LOWEST_MONEY_VALUE,
} from '../../CategoriesVariables';

import { AppRoutes } from '@lopi-2/common';
import { FetchedCategoryResponse } from '../../../../../../shop/types/FetchedCategoryResponse';
import Link from 'next/link';
import { getCategoryQuantityByUUID } from '../../../../../../shop/actions/getCategoryQuantityByUUID';
import styles from './Sidebar.module.scss';
import { useSearchParams } from '../../../../hooks/useSearchParams';
import { useState } from 'react';

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
  content: FetchedCategoryResponse[];
}
type allCategoriesAndCoutArrayTypes = {
  count: number;
}[];

export const Sidebar: FC<SidebarProps> = ({
  onSidebarFilter,
  activeCategory,
  content,
}) => {
  const [setup, setSetup] = useState<boolean>();
  const { getParam, setParam } = useSearchParams();
  const [allCategoriesAndCoutArray, setAllCategoriesAndCountArray] =
    useState<allCategoriesAndCoutArrayTypes>();

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (let i = 0; i < content.length; i++) {
        const number = await getCategoryQuantityByUUID(content[i].uid);
        data.push({ count: number });
      }
      setAllCategoriesAndCountArray(data);
    };

    fetchData();
  }, [content]);

  const setupFunction = () => {
    if (getParam.availability === 'false') {
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

  const renderedList = content.map((item, i) => (
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
        {allCategoriesAndCoutArray !== undefined
          ? allCategoriesAndCoutArray[i].count
          : '?'}
      </Badge>
    </ListGroup.Item>
  ));

  const handleRangeSlider = (e: RangeSliderValues) => {
    if (onSidebarFilter.lowerMoneyValueFilter !== e.min) {
      if (getParam.filterPriceLow !== e.min.toString()) {
        onSidebarFilter.onLowerMoneyValueFilterChange(e.min);
        setParam('filterPriceLow', e.min.toString());
      }
    }
    if (onSidebarFilter.higherMoneyValueFilter !== e.max) {
      if (getParam.filterPriceHigh !== e.max.toString()) {
        onSidebarFilter.onHigherMoneyValueFilterChange(e.max);
        setParam('filterPriceHigh', e.max.toString());
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
          setParam('availability', (!onSidebarFilter.availability).toString());
        }}
        checked={onSidebarFilter.availability}
      />
    </aside>
  );
};
