import { AppRoutes } from '@lopi-2/common';
import { FC } from 'react';
import { Item } from 'react-contexify';
import style from './contextMenu.module.scss';
import { useCart } from '../../contexts/CartContext';

type CartContextMenuActionProps = {
  productUid: string;
  disabled?: boolean;
};

export const AddProductToCartAction: FC<CartContextMenuActionProps> = ({
  productUid,
}) => {
  const { addProduct, cartData } = useCart();
  const handleAddProduct = () => {
    addProduct(productUid, 1);
  };

  const found = cartData?.cartItems.find((el) => el.product.uid === productUid);

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
  productUid,
}) => {
  const { increaseQuantity, cartData } = useCart();
  const handleIncreaseProductCount = () => {
    increaseQuantity(productUid);
  };

  const maxedQuantity = cartData?.cartItems.find(
    (el) => el.product.uid === productUid && el.product.quantity === el.quantity
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
  productUid,
}) => {
  const { decreaseQuantity, cartData } = useCart();
  const handleDecreaseProductCount = () => {
    decreaseQuantity(productUid);
  };

  const found = cartData?.cartItems.find(
    (el) => el.product.uid === productUid && el.quantity > 1
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
  productUid,
  disabled = false,
}) => {
  const saveLinkToClipboard = () => {
    navigator.clipboard.writeText(
      `${location.origin}${AppRoutes.getSpecifedProductPath(productUid)}`
    );
  };

  return (
    <Item
      onClick={saveLinkToClipboard}
      className={`${style.contextMenuItem} ${style.copyProductLinkAction}`}
      disabled={disabled}
    >
      Copy link.
    </Item>
  );
};
