'use client';
import { Badge, Form, ListGroup } from 'react-bootstrap';
import styles from '../Categories.module.scss';
import { FC } from 'react';
import Link from 'next/link';
import FormRange from 'react-bootstrap/esm/FormRange';

interface SidebarProps {
  activeCategory: string;
  list: string[];
}

export const Sidebar: FC<SidebarProps> = ({ activeCategory, list }) => {
  const renderedList = list.map((item, index) => (
    <ListGroup.Item
      active={false}
      className={
        activeCategory === item
          ? styles.sidebarActiveItemList
          : styles.sidebarItemList
      }
      key={index}
      as={Link}
      href={`${item}`}
      passHref
    >
      {item}
      <Badge
        bg="none"
        className={
          activeCategory === item
            ? styles.sidebarItemBadgeActive
            : styles.sidebarItemBadge
        }
      >
        3
      </Badge>
    </ListGroup.Item>
  ));

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Kategorie</h2>
      <ListGroup as="ol" className={styles.sidebarCategories}>
        {renderedList}
      </ListGroup>
      <div className={styles.sidebarPrice}>
        <h3 className={styles.sidebarTitle}>Cena</h3>
        <FormRange className={styles.sidebarRange} name="price" id="price" />
        <Form.Label className={styles.sidebarLabel}>
          Cena: 0 PLN - 160 PLN
        </Form.Label>
      </div>
      <Form.Check
        className={styles.sidebarAvailableCheck}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="available"
      />
    </aside>
  );
};
