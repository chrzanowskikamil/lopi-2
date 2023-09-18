import style from './ProductPrice.module.scss';
import { FC } from 'react';
import { displayPrice } from '@lopi-2/common';
import { useCart } from '../../../../../../../contexts/CartContext';

interface ProductPriceProps {
  productUid: string;
}

export const ProductPrice: FC<ProductPriceProps> = ({ productUid }) => {
  const { getPriceDetails } = useCart();
  const { regularPrice, discountPrice } = getPriceDetails(productUid);

  return (
    <>
      <p className={discountPrice ? style.priceStrikeThrough : style.price}>
        {displayPrice(regularPrice)}
      </p>
      {!!discountPrice && (
        <p className={style.price}>{displayPrice(discountPrice)}</p>
      )}
    </>
  );
};
