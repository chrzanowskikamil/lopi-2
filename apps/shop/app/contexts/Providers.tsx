'use client';

import { CartProvider } from './CartContext';
import { ChildrenFC } from '@lopi-2/common';
import { OrderProvider } from './OrderContext';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <CartProvider>
      <OrderProvider>{children}</OrderProvider>
    </CartProvider>
  );
};
