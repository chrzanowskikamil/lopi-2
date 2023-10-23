import {
  AddProductToCartAction,
  CopyProductLinkAction,
  DecreaseProductCountAction,
  IncreaseProductCountAction,
} from './ContextBuilderActions';

export interface ContextBuilder {
  withAddProduct(): void;
  withIncreaseProductCount(): void;
  withDecreaseProductCount(): void;
  withCopyProductLink(): void;
}

export class ContextMenu {
  public parts: JSX.Element[] = [];
}

export class ContextConcreteBuilder implements ContextBuilder {
  private contextMenu!: ContextMenu;
  private uid: string;

  constructor(productUid: string) {
    this.uid = productUid;
    this.reset();
  }

  public reset(): void {
    this.contextMenu = new ContextMenu();
  }

  public withAddProduct(): void {
    this.contextMenu.parts.push(
      <AddProductToCartAction
        productUid={this.uid}
        key={'AddProductToCartAction'}
      />
    );
  }

  public withIncreaseProductCount(): void {
    this.contextMenu.parts.push(
      <IncreaseProductCountAction
        productUid={this.uid}
        key={'IncreaseProductCountAction'}
      />
    );
  }

  public withDecreaseProductCount(): void {
    this.contextMenu.parts.push(
      <DecreaseProductCountAction
        productUid={this.uid}
        key={'DecreaseProductCountAction'}
      />
    );
  }

  public withCopyProductLink(): void {
    this.contextMenu.parts.push(
      <CopyProductLinkAction
        productUid={this.uid}
        key={'CopyProductLinkAction'}
      />
    );
  }

  public getProduct(): ContextMenu {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}
