'use client';

import { FC, useState } from 'react';

import { Button } from '@lopi-2/common';
import { CartItems } from './components/CartItems/CartItems';
import { EmptyCartMessage } from './components/EmptyCartMessage/EmptyCartMessage';
import { IconWrapper } from '../Icons/IconWrapper';
import { Offcanvas } from 'react-bootstrap';
import style from './Cart.module.scss';
import { useCart } from '../../contexts/CartContext';

export const Cart: FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>();
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const { cartData } = useCart();
  const productsCounter = cartData?.cartItems.length || 0;

  const cartView = !productsCounter ? (
    <EmptyCartMessage />
  ) : (
    <CartItems handleClose={handleCloseCart} />
  );

  return (
    <>
      <div className={style.cartBlock}>
        <span className={style.supper}>{productsCounter}</span>
        <Button
          className={'m-0 p-0'}
          title={<IconWrapper icon={<i className="bi bi-cart3" />} />}
          onClick={handleOpenCart}
        />
      </div>

      <Offcanvas
        style={{ width: '433px' }}
        show={isCartOpen}
        onHide={handleCloseCart}
        placement="end"
      >
        <Offcanvas.Header
          className={style.cartHeader}
          closeButton
          closeLabel="Close modal"
          closeVariant="white"
        >
          <Offcanvas.Title>
            <div className={style.cartBlock}>
              <div className={style.supper}>
                <span>{productsCounter}</span>
              </div>
              <IconWrapper icon={<i className="bi bi-cart3"></i>} />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{cartView}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
