import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { CartContextMenu } from '../CartContextMenu';
import { CartProvider } from '../../../contexts/CartContext';
import React from 'react';

describe('CartContextMenu', () => {
  const uid = '123';
  const id = 'cart-context-menu';

  it('renders the children', () => {
    const { getByText } = render(
      <CartProvider>
        <CartContextMenu uid={uid} id={id}>
          <div>Test Child</div>
        </CartContextMenu>
      </CartProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('renders the context menu trigger', () => {
    const { getByText } = render(
      <CartProvider>
        <CartContextMenu uid={uid} id={id}>
          <div data-context-menu>Test Child</div>
        </CartContextMenu>
      </CartProvider>
    );

    expect(getByText('Test Child')).toHaveAttribute('data-context-menu');
  });

  it('renders the context menu', () => {
    const { getByText } = render(
      <CartProvider>
        <CartContextMenu uid={uid} id={id}>
          <div data-context-menu>Test Child</div>
        </CartContextMenu>
      </CartProvider>
    );

    fireEvent.click(getByText('Test Child'));

    expect(
      getByText((content, element) => {
        return content.includes('AddProduct');
      })
    ).toBeInTheDocument();
  });
});
