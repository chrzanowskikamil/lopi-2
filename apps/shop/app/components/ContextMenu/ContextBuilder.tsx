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
    this.contextMenu.parts.push(<AddProductToCartButton uid={this.uid} />);
  }

  public includeIncreaseProductCountButton(): void {
    this.contextMenu.parts.push(<IncreaseProductCountButton uid={this.uid} />);
  }

  public includeDecreaseProductCountButton(): void {
    this.contextMenu.parts.push(<DecreaseProductCountButton uid={this.uid} />);
  }

  public includeCopyProductLink(): void {
    this.contextMenu.parts.push(<CopyProductLinkButton uid={this.uid} />);
  }

  public getProduct(): ContextMenu {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}

class ContextMenu {
  public parts: JSX.Element[] = [];
}
