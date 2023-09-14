'use client';

import { CartProvider } from './CartContext';
import { ChildrenFC } from '@lopi-2/common';

export const Providers: ChildrenFC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
