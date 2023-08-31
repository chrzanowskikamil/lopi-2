'use client';

import styles from './Sidebar.module.scss';
import { Badge, Form, ListGroup } from 'react-bootstrap';
import { RangePriceSlider } from './componenets/RangePriceSlider/RangePriceSlider';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useState } from 'react';

import { useCallback } from 'react';
interface SidebarProps {
  activeCategory: string;
  list: string[];
}

export const Sidebar: FC<SidebarProps> = ({ activeCategory, list }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [availability, setAvailability] = useState<boolean>(() =>
    searchParams.get('availibilty') === 'false' ? false : true
  );
  // console.log(availability);
  const getItemClassName = (item: string) =>
    activeCategory === item ? styles.activeListItem : styles.listItem;

  const getBadgeClassName = (item: string) =>
    activeCategory === item ? styles.activeBadge : styles.badge;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
      <Link
        onClick={() => setAvailability(!availability)}
        href={
          pathname + '?' + createQueryString('availability', `${!availability}`)
        }
        className={styles.anchor}
      >
        <Form.Check
          aria-label="Available"
          className={styles.available}
          label="DOSTĘPNOŚĆ"
          type="switch"
          id="productAvailabilitySwitch"
          // defaultChecked
        />
      </Link>
    </aside>
  );
};
