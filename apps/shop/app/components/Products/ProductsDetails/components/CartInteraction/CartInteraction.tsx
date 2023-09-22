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
    } else return alert('Dodałeś już wszystkie dostępne produkty.');
  };

  const addEnding = (productCount: number) => {
    if (productCount === 1) {
      return 'sztukę';
    } else if (
      [2, 3, 4].includes(productCount % 10) &&
      ![12, 13, 14].includes(productCount % 100)
    ) {
      return 'sztuki';
    } else return 'sztuk';
  };

  const handleClick = () => {
    alert(`Dodałeś do koszyka ${productCount} ${addEnding(productCount)}.`);

    if (getQuantityForProduct(uid) + productCount === productQuantity) {
      setProductCount(0);
    } else setProductCount(1);
  };

  const isButtonActive = () => {
    return !productCount;
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
