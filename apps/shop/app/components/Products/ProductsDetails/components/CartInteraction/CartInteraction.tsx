import AddToCart from '../../../components/tileShop/components/AddtoCart';
import style from './cartInteraction.module.scss';
import { FC, useState } from 'react';
import { QuantityButton } from '../../../../Cart/components/CartItems/components/CartProduct/QuantityController/components/QuantityButton';
import { useCart } from '../../../../../contexts/CartContext';

interface CartInteractionProps {
  uid: string;
  productQuantity: number;
}

export const CartInteraction: FC<CartInteractionProps> = ({
  uid,
  productQuantity,
}) => {
  const [productCount, setProductCount] = useState<number>(1);

  const { getQuantityForProduct } = useCart();

  const handleAddition = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    } else return;
  };

  const handleSubtraction = () => {
    if (getQuantityForProduct(uid) + productCount < productQuantity) {
      setProductCount(productCount + 1);
    } else return alert('Dodałeś już wszystkie dostępne produkty');
  };

  const handleClick = () => {
    alert(
      `Dodałeś do koszyka${
        productCount === 1 ? ' jedną sztukę' : ` ${productCount} sztuki`
      }.`
    );
    if (getQuantityForProduct(uid) + productCount === productQuantity) {
      setProductCount(0);
    } else setProductCount(1);
  };

  const isButtonActive = () => {
    if (productCount === 0) return true;
    else return false;
  };

  return (
    <div className={style.cartInteraction}>
      <div className={style.menu}>
        <QuantityButton title="-" onClick={handleAddition} />
        <div>{productCount}</div>
        <QuantityButton title="+" onClick={handleSubtraction} />
      </div>
      <AddToCart
        productUid={uid}
        className={style.productDetailsAddToCartButton}
        buttonText={'Dodaj do koszyka'}
        productCount={productCount}
        onClick={handleClick}
        disabled={isButtonActive()}
      />
    </div>
  );
};
