import style from './CostList.module.scss';
import { ListGroup } from 'react-bootstrap';
import { useCart } from '../../../contexts/CartContext';
import { FC, useMemo } from 'react';

export const CostList: FC = () => {
  const { cartData, totalCost, deliveryPrice } = useCart();
  const { totalPrice } = cartData || { totalPrice: 0 };

  interface CostItem {
    label: string;
    value?: number;
  }

  const costList: CostItem[] = useMemo(
    () => [
      { label: 'SUMA', value: totalPrice },
      { label: 'DOSTAWA', value: deliveryPrice },
      { label: 'RAZEM', value: totalCost },
    ],
    [totalPrice, deliveryPrice, totalCost]
  );

  const renderedCostList = costList.map((item) => (
    <ListGroup.Item key={item.label} className={style.costListGroupItem}>
      <span>{item.label}</span>
      <span>{item.value?.toFixed(2)} zł</span>
    </ListGroup.Item>
  ));

  return (
    <ListGroup className={style.costListGroup}>{renderedCostList}</ListGroup>
  );
};
