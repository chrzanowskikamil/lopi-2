import { ContextConcreteBuilder, ContextMenu } from '../ContextBuilder';

describe('Context director builds', () => {
  it('should build a full-featured cart context menu', () => {
    const uid = 'testUid';
    const contextBuilder = new ContextConcreteBuilder(uid);

    contextBuilder.withAddProduct();
    contextBuilder.withIncreaseProductCount();
    contextBuilder.withDecreaseProductCount();
    contextBuilder.withCopyProductLink();

    const contextMenu = contextBuilder.getProduct();

    expect(contextMenu).toBeInstanceOf(ContextMenu);

    expect(contextMenu.parts).toBeInstanceOf(Array);

    const expectedComponentTypes = [
      'AddProductToCartAction',
      'IncreaseProductCountAction',
      'DecreaseProductCountAction',
      'CopyProductLinkAction',
    ];

    expectedComponentTypes.forEach((componentType) => {
      expect(contextMenu.parts.some((part) => part.key === componentType)).toBe(
        true
      );
    });
  });
});
