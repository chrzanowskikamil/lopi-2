'use client';

import { FC } from 'react';
import { IconWrapper } from '../Icons/IconWrapper';
import { SearchComponent } from './SearchComponent';
import { Cart } from '../Cart/Cart';

export const RightNavIcons: FC<{ className?: string }> = (props) => {
  return (
    <div className={'right-nav-icons ' + props?.className || ''}>
      {/*FOR SMALL SCREENS ONLY*/}
      <SearchComponent className={'d-none d-sm-block'} />

      <IconWrapper icon={<i className="bi bi-person"></i>} />
      <IconWrapper icon={<i className="bi bi-heart"></i>} />

      <Cart />
    </div>
  );
};
