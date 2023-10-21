import { FC } from 'react';
import { Item } from 'react-contexify';
import style from './contextMenu.module.scss';
import { useCart } from '../../contexts/CartContext';

type CartContextMenuButtonProps = {
  uid: string;
};

export const AddProductToCartButton: FC<CartContextMenuButtonProps> = ({
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
      className={`${style.contextMenuItem} ${style.addProductToCartButton}`}
      disabled={found !== undefined}
    >
      AddProduct.
    </Item>
  );
};

export const IncreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
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
      className={`${style.contextMenuItem} ${style.increaseProductCountButton}`}
      disabled={maxedQuantity !== undefined}
    >
      Increase count in cart.
    </Item>
  );
};

export const DecreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
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
      className={`${style.contextMenuItem} ${style.decreaseProductCountButton}`}
      disabled={found === undefined}
    >
      Dencrease count in cart.
    </Item>
  );
};

export const CopyProductLinkButton: FC<CartContextMenuButtonProps> = ({
  uid,
}) => {
  const saveLinkToClipboard = () => {
    navigator.clipboard.writeText(`${location.origin}/productdetails/${uid}`);
  };

  return (
    <Item
      onClick={saveLinkToClipboard}
      className={`${style.contextMenuItem} ${style.copyProductLinkButton}`}
    >
      Copy link.
    </Item>
  );
};
