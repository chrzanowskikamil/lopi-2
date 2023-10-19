import { fireEvent, render } from '@testing-library/react';

import { IncreaseProductCountButton } from '../ContextBuilderButtons';

jest.mock('../../../contexts/CartContext', () => {
  return {
    useCart: jest.fn(() => ({
      increaseQuantity: jest.fn(),
      cartData: { cartItems: [{ product: { uid: '123' }, quantity: 1 }] },
    })),
  };
});

test('IncreaseProductCountButton calls increaseQuantity when clicked', () => {
  const elementUid = '123';

  const { container } = render(<IncreaseProductCountButton uid={elementUid} />);

  const customTextMatcher = (content: string, element: Element): boolean =>
    element.textContent?.includes(content) ?? false;

  const increaseButton = Array.from(
    container.querySelectorAll('.contextMenuItem')
  ).find((element) => customTextMatcher('+', element));

  if (increaseButton) {
    fireEvent.click(increaseButton);

    const mockIncreaseQuantity = jest.fn();
    jest.mock('../../../contexts/CartContext', () => ({
      useCart: jest.fn(() => ({ increaseQuantity: mockIncreaseQuantity })),
    }));
    expect(mockIncreaseQuantity).toHaveBeenCalledWith(elementUid);
  }
});
