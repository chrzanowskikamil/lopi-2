'use client';

import { Cart } from '../Cart/Cart';
import { FC } from 'react';
import { IconWrapper } from '../Icons/IconWrapper';
import { SearchComponent } from './SearchComponent';

export const RightNavIcons: FC<{ className?: string }> = (props) => {
  return (
    <div className={'right-nav-icons ' + props?.className || ''}>
      {/*FOR SMALL SCREENS ONLY*/}
      <SearchComponent className={'d-none d-lg-block'} />

      <IconWrapper icon={<i className="bi bi-person"></i>} />
      <IconWrapper icon={<i className="bi bi-heart"></i>} />

      <Cart />
    </div>
  );
};
