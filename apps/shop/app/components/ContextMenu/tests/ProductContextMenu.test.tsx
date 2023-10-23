import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { CartProvider } from '../../../contexts/CartContext';
import { ContextConcreteBuilder } from '../ContextBuilder';
import { ContextDirector } from '../ContextDirector';
import { ProductContextMenu } from '../ProductContextMenu';

describe('ProductContextMenu', () => {
  let builder: ContextConcreteBuilder;
  let director: ContextDirector;

  beforeEach(() => {
    builder = new ContextConcreteBuilder('test-uid');
    director = new ContextDirector();
    director.setBuilder(builder);
    director.buildFullFeaturedProductContextMenu();
  });

  it('should render the child element', () => {
    const { getByText } = render(
      <CartProvider>
        <ProductContextMenu productUid="test-uid" id="test-id">
          <div>TestChildElement</div>
        </ProductContextMenu>
      </CartProvider>
    );
    const childElement = getByText('TestChildElement');
    expect(childElement).toBeInTheDocument();
  });

  it('should render the context menu when clicked', () => {
    const { getByText, getByRole } = render(
      <CartProvider>
        <ProductContextMenu productUid="test-uid" id="test-id">
          <div>Test Child Element</div>
        </ProductContextMenu>
      </CartProvider>
    );
    const childElement = getByText('Test Child Element');
    fireEvent.click(childElement);
    const contextMenu = getByRole('menu');
    expect(contextMenu).toBeInTheDocument();
  });

  it('should render the correct context menu items', () => {
    const { getByText } = render(
      <CartProvider>
        <ProductContextMenu productUid="test-uid" id="test-id">
          <div>Test Child Element</div>
        </ProductContextMenu>
      </CartProvider>
    );
    const childElement = getByText('Test Child Element');
    fireEvent.contextMenu(childElement);

    const addProductAction = getByText('AddProduct.');
    const increaseCountAction = getByText('Increase count in cart.');
    const decreaseCountAction = getByText('Dencrease count in cart.');
    const copyLinkAction = getByText('Copy link.');
    expect(addProductAction).toBeInTheDocument();
    expect(increaseCountAction).toBeInTheDocument();
    expect(decreaseCountAction).toBeInTheDocument();
    expect(copyLinkAction).toBeInTheDocument();
  });
});
