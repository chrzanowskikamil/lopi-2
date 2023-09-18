'use client';
import style from './QuantityController.module.scss';
import { FC } from 'react';
import { useCart } from '../../../../../../../contexts/CartContext';
import { QuantityButton } from './components/QuantityButton';

interface QuantityControllerProps {
  productId: string;
  className?: string;
}

export const QuantityController: FC<QuantityControllerProps> = ({
  className,
  productId,
}) => {
  const { increaseQuantity, decreaseQuantity, getQuantityForProduct } =
    useCart();

  const quantity = getQuantityForProduct(productId);

  return (
    <div className={`${style.menu} ${className ? className : ''}`}>
      <QuantityButton title="-" onClick={() => decreaseQuantity(productId)} />
      <p>{quantity}</p>
      <QuantityButton title="+" onClick={() => increaseQuantity(productId)} />
    </div>
  );
};
