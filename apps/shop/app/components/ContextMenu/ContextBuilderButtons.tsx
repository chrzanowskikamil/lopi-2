import { FC } from 'react';
import { MenuItem } from 'react-contextmenu';
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
    <MenuItem
      onClick={handleAddProduct}
      key={`AddProductToCartButton ${elementUid}`}
      className={style.contextMenuItem}
      disabled={found !== undefined}
    >
      AddProduct.
    </MenuItem>
  );
};

export const IncreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
  uid: elementUid,
}) => {
  const { increaseQuantity, cartData } = useCart();
  console.log(cartData);
  const handleIncreaseProductCount = () => {
    increaseQuantity(elementUid);
  };

  const maxedQuantity = cartData?.cartItems.find(
    (el) => el.product.uid === elementUid && el.product.quantity === el.quantity
  );

  return (
    <MenuItem
      onClick={handleIncreaseProductCount}
      key={`IncreaseProductCountButton ${elementUid}`}
      className={style.contextMenuItem}
      disabled={maxedQuantity !== undefined}
    >
      Increase count in cart.
    </MenuItem>
  );
};

export const DecreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
  uid: elementUid,
}) => {
  const { decreaseQuantity, cartData } = useCart();
  const handleDecreaseProductCount = () => {
    decreaseQuantity(elementUid);
  };

  const found = cartData?.cartItems.find((el) => el.product.uid === elementUid);

  return (
    <MenuItem
      onClick={handleDecreaseProductCount}
      key={`DecreaseProductCountButton ${elementUid}`}
      className={style.contextMenuItem}
      disabled={found === undefined}
    >
      Dencrease count in cart.
    </MenuItem>
  );
};

export const CopyProductLinkButton: FC<CartContextMenuButtonProps> = ({
  uid,
}) => {
  const saveLinkToClipboard = () => {
    navigator.clipboard.writeText(`${location.origin}/productdetails/${uid}`);
  };

  return (
    <MenuItem
      onClick={() => saveLinkToClipboard()}
      key={`CopyProductLink ${uid}`}
      className={style.contextMenuItem}
    >
      Copy link
    </MenuItem>
  );
};
