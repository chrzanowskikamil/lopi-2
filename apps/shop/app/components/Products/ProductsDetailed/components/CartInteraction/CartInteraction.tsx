import { QuantityController } from '../../../../Cart/components/CartItems/components/CartProduct/components/QuantityController/QuantityController';
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
        customClassName={style.productDetailsQuantityController}
      />
      <AddToCart
        productUid={uid}
        customClassName={style.productDetailsAddToCartButton}
      >
        Dodaj do koszyka
      </AddToCart>
    </div>
  );
};
