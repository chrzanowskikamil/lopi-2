'use client';

import styles from './Sidebar.module.scss';
import { Badge, Form, ListGroup } from 'react-bootstrap';
import { RangePriceSlider } from './componenets/RangePriceSlider/RangePriceSlider';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface SidebarProps {
  activeCategory: string;
  list: string[];
  availability: boolean;
  setAvailability: (availability: boolean) => void;
  higherMoneyValue: number;
  lowerMoneyValue: number;
  setHigherMoneyValue: (higherMoneyValue: number) => void;
  setLowerMoneyValue: (lowerMoneyValue: number) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  activeCategory,
  list,
  availability,
  setAvailability,
  higherMoneyValue,
  lowerMoneyValue,
  setHigherMoneyValue,
  setLowerMoneyValue,
}) => {
  const pathname = usePathname();
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

  const goToQueryStringHref = (query: string, value: string) => {
    const url = new URL(location.href);
    url.searchParams.set(`${query}`, `${value}`);
    history.pushState({}, '', url);
    console.log(pathname);
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Kategorie</h2>
      <ListGroup as="ol" className={styles.categoryList}>
        {renderedList}
      </ListGroup>
      <RangePriceSlider
        setHigherMoneyValue={setHigherMoneyValue}
        setLowerMoneyValue={setLowerMoneyValue}
        higherMoneyValue={higherMoneyValue}
        lowerMoneyValue={lowerMoneyValue}
      />

      <Form.Check
        aria-label="Available"
        className={styles.available}
        label="DOSTĘPNOŚĆ"
        type="switch"
        id="productAvailabilitySwitch"
        onChange={() => {
          goToQueryStringHref('availability', (!availability).toString());
          setAvailability(!availability);
        }}
        checked={availability}
      />
    </aside>
  );
};
