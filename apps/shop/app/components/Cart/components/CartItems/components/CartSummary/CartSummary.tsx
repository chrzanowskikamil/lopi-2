'use client';
import { ListGroup } from 'react-bootstrap';
import style from './CartSummary.module.scss';
import { useCart } from '../../../../../../contexts/CartContext';
import { FC, useMemo } from 'react';

interface SummaryItem {
  label: string;
  value: number;
}

export const CartSummary: FC = () => {
  const { totalPrice, deliveryPrice, totalCost } = useCart();

  const summaryItems: SummaryItem[] = useMemo(
    () => [
      { label: 'Cena produktów', value: totalPrice },
      { label: 'Dostawa', value: deliveryPrice },
      { label: 'Łączna kwota', value: totalCost },
    ],
    [totalPrice, deliveryPrice, totalCost]
  );

  const renderedSummaryItems = summaryItems.map((item) => (
    <ListGroup.Item key={item.label} className={style.itemList}>
      <span>{item.label}</span>
      <span>{item.value.toFixed(2)} zł</span>
    </ListGroup.Item>
  ));

  return (
    <footer className={style.footer}>
      <ListGroup as="ul">{renderedSummaryItems}</ListGroup>
    </footer>
  );
};
