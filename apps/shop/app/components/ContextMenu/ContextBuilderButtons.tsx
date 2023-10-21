import { AppRoutes } from '@lopi-2/common';
import { FC } from 'react';
import { Item } from 'react-contexify';
import style from './contextMenu.module.scss';
import { useCart } from '../../contexts/CartContext';

type CartContextMenuActionProps = {
  uid: string;
};

export const AddProductToCartAction: FC<CartContextMenuActionProps> = ({
  uid: elementUid,
}) => {
  const { addProduct, cartData } = useCart();
  const handleAddProduct = () => {
    addProduct(elementUid, 1);
  };

  const found = cartData?.cartItems.find((el) => el.product.uid === elementUid);

  return (
    <Item
      onClick={handleAddProduct}
      className={`${style.contextMenuItem} ${style.addProductToCartAction}`}
      disabled={found !== undefined}
    >
      AddProduct.
    </Item>
  );
};

export const IncreaseProductCountAction: FC<CartContextMenuActionProps> = ({
  uid: elementUid,
}) => {
  const { increaseQuantity, cartData } = useCart();
  const handleIncreaseProductCount = () => {
    increaseQuantity(elementUid);
  };

  const maxedQuantity = cartData?.cartItems.find(
    (el) => el.product.uid === elementUid && el.product.quantity === el.quantity
  );

  return (
    <Item
      onClick={handleIncreaseProductCount}
      className={`${style.contextMenuItem} ${style.increaseProductCountAction}`}
      disabled={maxedQuantity !== undefined}
    >
      Increase count in cart.
    </Item>
  );
};

export const DecreaseProductCountAction: FC<CartContextMenuActionProps> = ({
  uid: elementUid,
}) => {
  const { decreaseQuantity, cartData } = useCart();
  const handleDecreaseProductCount = () => {
    decreaseQuantity(elementUid);
  };

  const found = cartData?.cartItems.find(
    (el) => el.product.uid === elementUid && el.quantity > 1
  );

  return (
    <Item
      onClick={handleDecreaseProductCount}
      className={`${style.contextMenuItem} ${style.decreaseProductCountAction}`}
      disabled={found === undefined}
    >
      Dencrease count in cart.
    </Item>
  );
};

export const CopyProductLinkAction: FC<CartContextMenuActionProps> = ({
  uid,
}) => {
  const saveLinkToClipboard = () => {
    navigator.clipboard.writeText(
      `${location.origin}${AppRoutes.getSpecifedProductPath(uid)}`
    );
  };

  return (
    <Item
      onClick={saveLinkToClipboard}
      className={`${style.contextMenuItem} ${style.copyProductLinkAction}`}
    >
      Copy link.
    </Item>
  );
};
