import {
  AddProductToCartButton,
  CopyProductLinkButton,
  DecreaseProductCountButton,
  IncreaseProductCountButton,
} from '../ContextBuilderButtons';
import { ContextConcreteBuilder, ContextMenu } from '../ContextBuilder';

describe('ContextConcreteBuilder', () => {
  it('should build a context menu', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.includeCopyProductLink();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(2);
  });

  it('should reset the context menu', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.reset();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(0);
  });
  it('should initialize with an empty parts array', () => {
    const contextMenu = new ContextMenu();
    expect(contextMenu.parts).toEqual([]);
  });
  it('should include specific buttons', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.includeCopyProductLink();

    const contextMenu = builder.getProduct();

    expect(
      contextMenu.parts.some((part) => part.type === AddProductToCartButton) &&
        contextMenu.parts.some((part) => part.type === CopyProductLinkButton)
    ).toBe(true);

    expect(
      contextMenu.parts.some(
        (part) => part.type === IncreaseProductCountButton
      ) &&
        contextMenu.parts.some(
          (part) => part.type === DecreaseProductCountButton
        )
    ).toBe(false);
  });
  it('should build buttons in the correct order', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.includeIncreaseProductCountButton();
    builder.includeCopyProductLink();
    builder.includeDecreaseProductCountButton();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(4);
    expect(contextMenu.parts[0].type).toBe(AddProductToCartButton);
    expect(contextMenu.parts[1].type).toBe(IncreaseProductCountButton);
    expect(contextMenu.parts[2].type).toBe(CopyProductLinkButton);
    expect(contextMenu.parts[3].type).toBe(DecreaseProductCountButton);
  });
  it('should accumulate buttons when called multiple times', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();
    builder.includeAddProductButton();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(2);
    expect(contextMenu.parts[0].type).toBe(AddProductToCartButton);
    expect(contextMenu.parts[1].type).toBe(AddProductToCartButton);
  });
  it('should set the uid prop for AddProductToCartButton', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.includeAddProductButton();

    const contextMenu = builder.getProduct();

    const addProductButton = contextMenu.parts.find(
      (part) => part.type === AddProductToCartButton
    );

    if (addProductButton) {
      expect(addProductButton.props.uid).toBe(uid);
    } else {
      fail('AddProductToCartButton not found in context menu parts');
    }
  });
});
