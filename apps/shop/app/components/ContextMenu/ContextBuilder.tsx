import {
  AddProductToCartButton,
  CopyProductLinkButton,
  DecreaseProductCountButton,
  IncreaseProductCountButton,
} from './ContextBuilderButtons';

export interface ContextBuilder {
  includeAddProductButton(): void;
  includeIncreaseProductCountButton(): void;
  includeDecreaseProductCountButton(): void;
  includeCopyProductLink(): void;
}

export class ContextConcreteBuilder implements ContextBuilder {
  private contextMenu!: ContextMenu;
  private uid: string;

  constructor(uid: string) {
    this.uid = uid;
    this.reset();
  }

  public reset(): void {
    this.contextMenu = new ContextMenu();
  }

  public includeAddProductButton(): void {
    this.contextMenu.parts.push(
      <AddProductToCartButton uid={this.uid} key={'AddProductToCartButton'} />
    );
  }

  public includeIncreaseProductCountButton(): void {
    console.log(this.uid);
    this.contextMenu.parts.push(
      <IncreaseProductCountButton
        uid={this.uid}
        key={'IncreaseProductCountButton'}
      />
    );
  }

  public includeDecreaseProductCountButton(): void {
    this.contextMenu.parts.push(
      <DecreaseProductCountButton
        uid={this.uid}
        key={'DecreaseProductCountButton'}
      />
    );
  }

  public includeCopyProductLink(): void {
    this.contextMenu.parts.push(
      <CopyProductLinkButton uid={this.uid} key={'CopyProductLinkButton'} />
    );
  }

  public getProduct(): ContextMenu {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}

export class ContextMenu {
  public parts: JSX.Element[] = [];
}
