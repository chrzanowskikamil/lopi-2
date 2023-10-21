import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { CartContextMenu } from '../ProductContextMenu';
import { CartProvider } from '../../../contexts/CartContext';
import { ContextConcreteBuilder } from '../ContextBuilder';
import { Director } from '../ContextDirector';

describe('CartContextMenu', () => {
  let builder: ContextConcreteBuilder;
  let director: Director;

  beforeEach(() => {
    builder = new ContextConcreteBuilder('test-uid');
    director = new Director();
    director.setBuilder(builder);
    director.buildFullFeaturedCartContextMenu();
  });

  it('renders the child element', () => {
    const { getByText } = render(
      <CartProvider>
        <CartContextMenu uid="test-uid" id="test-id">
          <div>Test Child Element</div>
        </CartContextMenu>
      </CartProvider>
    );
    const childElement = getByText('Test Child Element');
    expect(childElement).toBeInTheDocument();
  });

  it('renders the context menu when clicked', () => {
    const { getByText, getByRole } = render(
      <CartProvider>
        <CartContextMenu uid="test-uid" id="test-id">
          <div>Test Child Element</div>
        </CartContextMenu>
      </CartProvider>
    );
    const childElement = getByText('Test Child Element');
    fireEvent.click(childElement);
    const contextMenu = getByRole('menu');
    expect(contextMenu).toBeInTheDocument();
  });

  it('renders the correct context menu items', () => {
    const { getByText } = render(
      <CartProvider>
        <CartContextMenu uid="test-uid" id="test-id">
          <div>Test Child Element</div>
        </CartContextMenu>
      </CartProvider>
    );
    const addProductButton = getByText('AddProduct.');
    const increaseCountButton = getByText('Increase count in cart.');
    const decreaseCountButton = getByText('Dencrease count in cart.');
    const copyLinkButton = getByText('Copy link.');
    expect(addProductButton).toBeInTheDocument();
    expect(increaseCountButton).toBeInTheDocument();
    expect(decreaseCountButton).toBeInTheDocument();
    expect(copyLinkButton).toBeInTheDocument();
  });
});
