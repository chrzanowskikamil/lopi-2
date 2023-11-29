'use client';

import { CartProvider } from './CartContext';
import { CategoriesProvider } from './CategoriesContext';
import { ChildrenFC } from '@lopi-2/common';
import { OrderProvider } from './OrderContext';

export const Providers: ChildrenFC = ({ children }) => {
  return (
    <CategoriesProvider>
      <CartProvider>
        <OrderProvider>{children}</OrderProvider>
      </CartProvider>
    </CategoriesProvider>
  );
};
