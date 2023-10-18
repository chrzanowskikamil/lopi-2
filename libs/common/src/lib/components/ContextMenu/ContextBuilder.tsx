'use client';

import { MenuItem } from 'react-contextmenu';
// import { useCart } from '../../../../../../apps/shop/app/contexts/CartContext';

interface ContextBuilder {
  includeAddProductButton(): void;
  includeIncreaseProductCountButton(): void;
  includeDecreaseProductCountButton(): void;
  includeCopyProductLink(): void;
  //buttons might be in disabled mode while sugested action might not be available.
}

function handleAddProduct(e: any, data: { foo: any }) {
  console.log(data.foo);
}
function handleIncreaseProductCount(e: any, data: { foo: any }) {
  console.log(data.foo);
}
function handleDecreaseProductCount(e: any, data: { foo: any }) {
  console.log(data.foo);
}
function handleCopyProductLink(e: any, data: { foo: any }) {
  console.log(data.foo);
}

export class ContextConcreteBuilder implements ContextBuilder {
  private contextMenu!: ContextMenu1;

  constructor() {
    this.reset();
  }
  public reset(): void {
    this.contextMenu = new ContextMenu1();
  }

  public includeAddProductButton(): void {
    this.contextMenu.parts.push(
      <MenuItem
        data={{ foo: 'includeAddProductButton' }}
        onClick={handleAddProduct}
        key={'1'}
      >
        AddProduct.
      </MenuItem>
    );
  }

  public includeIncreaseProductCountButton(): void {
    this.contextMenu.parts.push(
      <MenuItem
        data={{ foo: 'includeIncreaseProductCountButton' }}
        onClick={handleIncreaseProductCount}
        key={'2'}
      >
        Increase count in cart.
      </MenuItem>
    );
  }

  public includeDecreaseProductCountButton(): void {
    this.contextMenu.parts.push(
      <MenuItem
        data={{ foo: 'includeDecreaseProductCountButton' }}
        onClick={handleDecreaseProductCount}
        key={'3'}
      >
        Decrease count in cart.
      </MenuItem>
    );
  }

  public includeCopyProductLink(): void {
    this.contextMenu.parts.push(
      <MenuItem
        data={{ foo: 'includeCopyProductLink' }}
        onClick={handleCopyProductLink}
        key={'4'}
      >
        Copy link.
      </MenuItem>
    );
  }

  public getProduct(): ContextMenu1 {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}

export class ContextMenu1 {
  public parts: JSX.Element[] = [];

  public currentBuildListed(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

class Director {
  private builder!: ContextBuilder;

  public setBuilder(builder: ContextBuilder): void {
    this.builder = builder;
  }

  public buildFullFeaturedContext(): void {
    this.builder.includeAddProductButton();
    this.builder.includeIncreaseProductCountButton();
    this.builder.includeDecreaseProductCountButton();
    this.builder.includeCopyProductLink();
  }
}

export function clientCode(director: Director) {
  const builder = new ContextConcreteBuilder();
  director.setBuilder(builder);

  director.buildFullFeaturedContext();

  return builder.getProduct();
}

export const director = new Director();

clientCode(director);
