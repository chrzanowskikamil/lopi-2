import { ContextConcreteBuilder, ContextMenu } from '../ContextBuilder';

describe('Director', () => {
  it('should build a full-featured cart context menu', () => {
    const uid = 'testUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.includeIncreaseProductCountButton();
    builder.includeDecreaseProductCountButton();
    builder.includeCopyProductLink();

    const contextMenu = builder.getProduct();

    expect(contextMenu).toBeInstanceOf(ContextMenu);

    expect(contextMenu.parts).toBeInstanceOf(Array);

    const expectedComponentTypes = [
      'AddProductToCartButton',
      'IncreaseProductCountButton',
      'DecreaseProductCountButton',
      'CopyProductLinkButton',
    ];

    expectedComponentTypes.forEach((componentType) => {
      expect(contextMenu.parts.some((part) => part.key === componentType)).toBe(
        true
      );
    });
  });
});
