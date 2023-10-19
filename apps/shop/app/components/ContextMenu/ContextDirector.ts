import { ContextBuilder, ContextConcreteBuilder } from './ContextBuilder';

export class Director {
  private builder!: ContextBuilder;

  public setBuilder(builder: ContextBuilder): void {
    this.builder = builder;
  }

  public buildFullFeaturedCartContextMenu(): void {
    this.builder.includeAddProductButton();
    this.builder.includeIncreaseProductCountButton();
    this.builder.includeDecreaseProductCountButton();
    this.builder.includeCopyProductLink();
  }
}

export function clientCode(uid: string) {
  const builder = new ContextConcreteBuilder(uid);
  director.setBuilder(builder);
  director.buildFullFeaturedCartContextMenu();

  return builder.getProduct();
}

export const director = new Director();
