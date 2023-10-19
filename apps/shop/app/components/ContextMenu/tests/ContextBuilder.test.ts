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
});
