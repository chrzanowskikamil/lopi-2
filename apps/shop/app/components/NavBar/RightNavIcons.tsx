'use client';

import { FC } from 'react';
import { IconWrapper } from '../Icons/IconWrapper';
import { Cart } from './components/Cart/Cart';
import { SearchComponent } from './SearchComponent';
import { CartProvider } from '../../contexts/CartContext';

export const RightNavIcons: FC<{ className?: string }> = (props) => {
  return (
    <CartProvider>
      <div className={'right-nav-icons ' + props?.className || ''}>
        {/*FOR SMALL SCREENS ONLY*/}
        <SearchComponent className={'d-none d-sm-block'} />

        <IconWrapper icon={<i className="bi bi-person"></i>} />
        <IconWrapper icon={<i className="bi bi-heart"></i>} />

        <Cart />
      </div>
    </CartProvider>
  );
};
