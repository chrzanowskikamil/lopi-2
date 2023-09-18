import { QuantityController } from '../../../../Cart/components/CartItems/components/CartProduct/QuantityController/QuantityController';
import AddToCart from '../../../components/tileShop/components/AddtoCart';
import style from './cartInteraction.module.scss';
import { FC } from 'react';

interface CartInteractionProps {
  uid: string;
}

export const CartInteraction: FC<CartInteractionProps> = ({ uid }) => {
  return (
    <div className={style.cartInteraction}>
      <QuantityController
        productId={uid}
        className={style.productDetailsQuantityController}
      />
      <AddToCart
        productUid={uid}
        className={style.productDetailsAddToCartButton}
        buttonText={' Dodaj do koszyka'}
      />
    </div>
  );
};
