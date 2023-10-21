import { ContextBuilder, ContextConcreteBuilder } from './ContextBuilder';

export class ContextDirector {
  private builder!: ContextBuilder;

  public setBuilder(builder: ContextBuilder): void {
    this.builder = builder;
  }

  public buildFullFeaturedCartContextMenu(): void {
    this.builder.withAddProduct();
    this.builder.withIncreaseProductCount();
    this.builder.withDecreaseProductCount();
    this.builder.withCopyProductLink();
  }
}

export function buildProductWithContextBuilder(uid: string) {
  const builder = new ContextConcreteBuilder(uid);
  director.setBuilder(builder);
  director.buildFullFeaturedCartContextMenu();

  return builder.getProduct();
}

export const director = new ContextDirector();
