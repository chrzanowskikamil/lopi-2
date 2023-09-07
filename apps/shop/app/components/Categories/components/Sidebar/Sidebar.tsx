'use client';

import styles from './Sidebar.module.scss';
import { Badge, Form, ListGroup } from 'react-bootstrap';
import TimeRangeSlider from '../../components/MultiRangeSlider/TimeRangeSlider';
import { FC } from 'react';
import Link from 'next/link';

import { SidebarProps } from '../../CategoriesTypesProps';

export const Sidebar: FC<SidebarProps> = ({
  categoriesReducer,
  activeCategory,
  list,
}) => {
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

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Kategorie</h2>
      <ListGroup as="ol" className={styles.categoryList}>
        {renderedList}
      </ListGroup>
      <TimeRangeSlider onChange={(e) => console.log('A', e)} />

      {/* categoriesReducer={categoriesReducer}  */}

      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="productAvailabilitySwitch"
        onChange={() => {
          categoriesReducer.onAvailabilityFilterChange(
            !categoriesReducer.state.availability
          );
          goToQueryStringHref(
            'availability',
            (!categoriesReducer.state.availability).toString()
          );
        }}
        checked={categoriesReducer.state.availability}
      />
    </aside>
  );
};
