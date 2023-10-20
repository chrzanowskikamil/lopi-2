import * as CartContextModule from '../../../contexts/CartContext';

import {
  AddProductToCartButton,
  CopyProductLinkButton,
  DecreaseProductCountButton,
  IncreaseProductCountButton,
} from '../ContextBuilderButtons';
import { fireEvent, render } from '@testing-library/react';

jest.mock('../../../contexts/CartContext', () => ({
  ...jest.requireActual('../../../contexts/CartContext'),
  useCart: jest.fn(() => ({
    cartData: {
      cartItems: [{ product: { uid: '123', quantity: 1 }, quantity: 1 }],
    },

    addProductToCart: jest.fn(),
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    removeProductFromCart: jest.fn(),
  })),
}));

describe('Button calls useCartMethod when clicked', () => {
  it('AddProductToCartButton calls addProduct when clicked', () => {
    const elementUid = '123';

    const { addProduct } = CartContextModule.useCart();

    const { container } = render(<AddProductToCartButton uid={elementUid} />);

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const addToCartButton = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('+', element));

    if (addToCartButton) {
      fireEvent.click(addToCartButton);

      expect(addProduct).toHaveBeenCalledWith(elementUid);
    }
  });
  it('IncreaseProductCountButton calls increaseQuantity when clicked', () => {
    const elementUid = '123';

    const { increaseQuantity } = CartContextModule.useCart();

    const { container } = render(
      <IncreaseProductCountButton uid={elementUid} />
    );

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const increaseButton = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('+', element));

    if (increaseButton) {
      fireEvent.click(increaseButton);

      expect(increaseQuantity).toHaveBeenCalledWith(elementUid);
    }
  });
  it('DecreaseProductCountButton calls increaseQuantity when clicked', () => {
    const elementUid = '123';

    const { decreaseQuantity } = CartContextModule.useCart();

    const { container } = render(
      <DecreaseProductCountButton uid={elementUid} />
    );

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const decreaseButton = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('+', element));

    if (decreaseButton) {
      fireEvent.click(decreaseButton);

      expect(decreaseQuantity).toHaveBeenCalledWith(elementUid);
    }
  });
});

describe('Disabled buttons checks', () => {
  it('AddProductToCartButton is disabled, when product is in cart.', () => {
    const elementUid = '123';

    const { container } = render(<AddProductToCartButton uid={elementUid} />);

    const addProductToCartButton = container.querySelector(
      '.addProductToCartButton'
    );

    expect(addProductToCartButton).toHaveClass(
      'react-contextmenu-item--disabled'
    );
  });
  it('IncreaseProductCountButton is disabled, when product quantity reaches max.', () => {
    const elementUid = '123';

    const { container } = render(
      <IncreaseProductCountButton uid={elementUid} />
    );

    const increaseProductCountButton = container.querySelector(
      '.increaseProductCountButton'
    );

    expect(increaseProductCountButton).toHaveClass(
      'react-contextmenu-item--disabled'
    );
  });
  it('DecreaseProductCountButton is disabled, when product quantity is min.', () => {
    const elementUid = '123';

    const { container } = render(
      <DecreaseProductCountButton uid={elementUid} />
    );

    const decreaseProductCountButton = container.querySelector(
      '.decreaseProductCountButton'
    );

    expect(decreaseProductCountButton).toHaveClass(
      'react-contextmenu-item--disabled'
    );
  });
});

describe('CopyProductLinkButton ', () => {
  it('renders the button with the correct text', () => {
    const uid = 'test-uid';
    const { getByText } = render(<CopyProductLinkButton uid={uid} />);
    const buttonElement = getByText('Copy link');
    expect(buttonElement).toBeInTheDocument();
  });

  it('copies the product link to the clipboard when clicked', () => {
    const uid = 'test-uid';
    const clipboardWriteTextMock = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });
    const { getByText } = render(<CopyProductLinkButton uid={uid} />);
    const buttonElement = getByText('Copy link');
    fireEvent.click(buttonElement);
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(
      `${location.origin}/productdetails/${uid}`
    );
  });
});
