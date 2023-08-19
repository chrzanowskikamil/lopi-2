'use client';
import styles from './Sidebar.module.scss';
import { Badge, Form, ListGroup } from 'react-bootstrap';
import { RangePriceSlider } from './componenets/RangePriceSlider/RangePriceSlider';
import { FC } from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeCategory: string;
  list: string[];
}

export const Sidebar: FC<SidebarProps> = ({ activeCategory, list }) => {
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

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Kategorie</h2>
      <ListGroup as="ol" className={styles.categoryList}>
        {renderedList}
      </ListGroup>
      <RangePriceSlider />
      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="available"
      />
    </aside>
  );
};
