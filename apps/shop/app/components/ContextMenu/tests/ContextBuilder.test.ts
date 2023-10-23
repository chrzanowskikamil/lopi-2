import {
  AddProductToCartAction,
  CopyProductLinkAction,
  DecreaseProductCountAction,
  IncreaseProductCountAction,
} from '../ContextBuilderActions';
import { ContextConcreteBuilder, ContextMenu } from '../ContextBuilder';

describe('ContextConcreteBuilder', () => {
  it('should build a context menu', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.withAddProduct();
    builder.withCopyProductLink();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(2);
  });

  it('should reset the context menu', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.withAddProduct();
    builder.reset();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(0);
  });
  it('should initialize with an empty parts array', () => {
    const contextMenu = new ContextMenu();
    expect(contextMenu.parts).toEqual([]);
  });

  it('should build actions in the correct order', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.withAddProduct();
    builder.withIncreaseProductCount();
    builder.withCopyProductLink();
    builder.withDecreaseProductCount();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(4);
    expect(contextMenu.parts[0].type).toBe(AddProductToCartAction);
    expect(contextMenu.parts[1].type).toBe(IncreaseProductCountAction);
    expect(contextMenu.parts[2].type).toBe(CopyProductLinkAction);
    expect(contextMenu.parts[3].type).toBe(DecreaseProductCountAction);
  });
  it('should accumulate actions when called multiple times', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.withAddProduct();
    builder.withAddProduct();

    const contextMenu = builder.getProduct();

    expect(contextMenu.parts.length).toBe(2);
    expect(contextMenu.parts[0].type).toBe(AddProductToCartAction);
    expect(contextMenu.parts[1].type).toBe(AddProductToCartAction);
  });
  it('should set the uid prop for AddProductToCartAction', () => {
    const uid = 'yourUid';
    const builder = new ContextConcreteBuilder(uid);

    builder.withAddProduct();

    const contextMenu = builder.getProduct();

    const addProductAction = contextMenu.parts.find(
      (part) => part.type === AddProductToCartAction
    );

    if (addProductAction) {
      expect(addProductAction.props.productUid).toBe(uid);
    } else {
      fail('AddProductToCartAction not found in context menu parts');
    }
  });
});
