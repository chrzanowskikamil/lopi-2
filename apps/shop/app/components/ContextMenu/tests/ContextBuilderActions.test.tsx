import * as CartContextModule from '../../../contexts/CartContext';

import {
  AddProductToCartAction,
  CopyProductLinkAction,
  DecreaseProductCountAction,
  IncreaseProductCountAction,
} from '../ContextBuilderActions';
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
  })),
}));
const clipboardWriteTextMock = jest.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: clipboardWriteTextMock,
  },
});

describe('Action calls useCartMethod when clicked', () => {
  it('should AddProductToCartAction calls addProduct when clicked', () => {
    const elementUid = '123';

    const { addProduct } = CartContextModule.useCart();

    const { container } = render(
      <AddProductToCartAction productUid={elementUid} />
    );

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const addToCartAction = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('+', element));

    if (addToCartAction) {
      fireEvent.click(addToCartAction);

      expect(addProduct).toHaveBeenCalledWith(elementUid);
    }
  });
  it('should IncreaseProductCountAction calls increaseQuantity when clicked', () => {
    const elementUid = '123';

    const { increaseQuantity } = CartContextModule.useCart();

    const { container } = render(
      <IncreaseProductCountAction productUid={elementUid} />
    );

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const increaseAction = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('+', element));

    if (increaseAction) {
      fireEvent.click(increaseAction);

      expect(increaseQuantity).toHaveBeenCalledWith(elementUid);
    }
  });
  it('should DecreaseProductCountAction calls increaseQuantity when clicked', () => {
    const elementUid = '123';

    const { decreaseQuantity } = CartContextModule.useCart();

    const { container } = render(
      <DecreaseProductCountAction productUid={elementUid} />
    );

    const customTextMatcher = (content: string, element: Element): boolean =>
      element.textContent?.includes(content) ?? false;

    const decreaseAction = Array.from(
      container.querySelectorAll('.contextMenuItem')
    ).find((element) => customTextMatcher('-', element));

    if (decreaseAction) {
      fireEvent.click(decreaseAction);

      expect(decreaseQuantity).toHaveBeenCalledWith(elementUid);
    }
  });
});

describe('Disabled actions checks', () => {
  it('should AddProductToCartAction be disabled, when product is in cart.', () => {
    const elementUid = '123';

    const { container } = render(
      <AddProductToCartAction productUid={elementUid} />
    );

    const addProductToCartAction = container.querySelector(
      '.addProductToCartAction'
    );

    expect(addProductToCartAction).toHaveClass('contexify_item-disabled');
  });
  it('should IncreaseProductCountAction be disabled, when product quantity reaches max.', () => {
    const elementUid = '123';

    const { container } = render(
      <IncreaseProductCountAction productUid={elementUid} />
    );

    const increaseProductCountAction = container.querySelector(
      '.increaseProductCountAction'
    );

    expect(increaseProductCountAction).toHaveClass('contexify_item-disabled');
  });
  it('should DecreaseProductCountAction be disabled, when product quantity is min.', () => {
    const elementUid = '123';
    const { container } = render(
      <DecreaseProductCountAction productUid={elementUid} />
    );

    const decreaseProductCountAction = container.querySelector(
      '.decreaseProductCountAction'
    );

    expect(decreaseProductCountAction).toHaveClass('contexify_item-disabled');
  });
});

describe('CopyProductLinkAction', () => {
  const uid = 'test-uid';
  it('should render the action with the correct text', () => {
    const { container } = render(
      <CopyProductLinkAction productUid={uid} disabled={true} />
    );
    const copyProductLinkAction = container.querySelector(
      '.copyProductLinkAction'
    );

    expect(copyProductLinkAction?.textContent).toBe('Copy link.');
  });
});
