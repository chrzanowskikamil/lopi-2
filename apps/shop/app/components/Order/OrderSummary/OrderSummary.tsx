import style from './OrderSummary.module.scss';
import { CostList } from './CostList';
import { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useCart } from '../../../contexts/CartContext';

export const OrderSummary: FC = () => {
  const { afterSubmitCartData, getPriceDetails } = useCart();

  const productsList = afterSubmitCartData?.cartItems.map((product) => {
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
