'use client';
import style from './Cart.module.scss';
import { FC } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { CartIcon } from 'apps/shop/app/assets/SvgIcons/CartIcon';
import { EmptyCartMessage } from './components/EmptyCartMessage/EmptyCartMessage';
import { CartItems } from './components/CartItems/CartItems';
import { useCart } from 'apps/shop/app/context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Cart: FC<CartProps> = ({ isOpen, onClose }) => {
  const { productsInCart } = useCart();
  const productsCounter = productsInCart.length;

  const cartView =
    productsInCart.length === 0 ? (
      <EmptyCartMessage />
    ) : (
      <CartItems products={productsInCart} />
    );

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="end">
      <Offcanvas.Header
        className={style.header}
        closeButton
        closeLabel="Close modal"
        closeVariant="white"
      >
        <Offcanvas.Title>
          <div>
            <div className={style.socialsCounter}>
              <span>{productsCounter}</span>
            </div>
            <CartIcon />
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{cartView}</Offcanvas.Body>
    </Offcanvas>
  );
};
