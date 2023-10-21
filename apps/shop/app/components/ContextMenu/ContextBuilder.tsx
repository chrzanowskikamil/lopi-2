import {
  AddProductToCartAction,
  CopyProductLinkAction,
  DecreaseProductCountAction,
  IncreaseProductCountAction,
} from './ContextBuilderButtons';

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
      <AddProductToCartAction uid={this.uid} key={'AddProductToCartButton'} />
    );
  }

  public withIncreaseProductCount(): void {
    this.contextMenu.parts.push(
      <IncreaseProductCountAction
        uid={this.uid}
        key={'IncreaseProductCountButton'}
      />
    );
  }

  public withDecreaseProductCount(): void {
    this.contextMenu.parts.push(
      <DecreaseProductCountAction
        uid={this.uid}
        key={'DecreaseProductCountButton'}
      />
    );
  }

  public withCopyProductLink(): void {
    this.contextMenu.parts.push(
      <CopyProductLinkAction uid={this.uid} key={'CopyProductLinkButton'} />
    );
  }

  public getProduct(): ContextMenu {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}
