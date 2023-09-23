import style from './OrderSummary.module.scss';
import { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useCart } from '../../../contexts/CartContext';
import { CostList } from './CostList';

export const OrderSummary: FC = () => {
  const { cartData, getPriceDetails } = useCart();

  const productsList = cartData?.cartItems.map((product) => {
    const { regularPrice, discountPrice } = getPriceDetails(
      product.product.uid
    );
    const displayPrice = discountPrice || regularPrice;

    return (
      <ListGroup.Item className={style.listItem} key={product.product.uid}>
        {product.product.name}
        <span>{displayPrice.toFixed(2)} zł</span>
      </ListGroup.Item>
    );
  });

  return (
    <div className={style.container}>
      <p>Produkty</p>
      <ListGroup className={style.productListGroup}>{productsList}</ListGroup>
      <CostList />
    </div>
  );
};
