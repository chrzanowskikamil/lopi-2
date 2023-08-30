'use client';
import style from './Cart.module.scss';
import { FC, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { EmptyCartMessage } from './components/EmptyCartMessage/EmptyCartMessage';
import { CartItems } from './components/CartItems/CartItems';
import { useCart } from '../../../../contexts/CartContext';
import { IconWrapper } from '../../../Icons/IconWrapper';
import { Button } from '@lopi-2/common';

export const Cart: FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>();
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const { productsInCart } = useCart();
  const productsCounter = productsInCart.length;

  const cartView = !productsInCart.length ? (
    <EmptyCartMessage />
  ) : (
    <CartItems products={productsInCart} />
  );

  return (
    <>
      <div className={style.cartBlock}>
        {/*TODO: handle that*/}
        <span className={style.supper}>{productsCounter}</span>
        <Button
          className={'m-0 p-0'}
          title={<IconWrapper icon={<i className="bi bi-cart3" />} />}
          onClick={handleOpenCart}
        />
      </div>

      <Offcanvas show={isCartOpen} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header
          closeButton
          closeLabel="Close modal"
          closeVariant="white"
        >
          <Offcanvas.Title>
            <div>
              <div>
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
