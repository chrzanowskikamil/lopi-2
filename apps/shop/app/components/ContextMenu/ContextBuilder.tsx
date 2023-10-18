import { FC } from 'react';
import { MenuItem } from 'react-contextmenu';
import { useCart } from '../../contexts/CartContext';

interface ContextBuilder {
  includeAddProductButton(): void;
  includeIncreaseProductCountButton(): void;
  includeDecreaseProductCountButton(): void;
  includeCopyProductLink(): void;
  // Buttons might be in disabled mode while suggested action might not be available.
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
    this.contextMenu.parts.push(<ProductButton />);
  }

  public includeIncreaseProductCountButton(): void {
    this.contextMenu.parts.push(<IncreaseProductCountButton />);
  }

  public includeDecreaseProductCountButton(): void {
    this.contextMenu.parts.push(<DecreaseProductCountButton />);
  }

  public includeCopyProductLink(): void {
    this.contextMenu.parts.push(<CopyProductLink />);
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

//componenst

const ProductButton: FC = () => {
  const { addProduct } = useCart();

  const handleAddProduct = () => {
    addProduct('7cc3b7f5-11d2-4034-b975-d6ebbeadca14', 1);
    // Handle other actions if needed
  };

  return (
    <MenuItem
      data={{ foo: 'includeAddProductButton' }}
      onClick={handleAddProduct}
      key={'1'}
    >
      AddProduct.
    </MenuItem>
  );
};

const IncreaseProductCountButton: FC = () => {
  const { increaseQuantity } = useCart();

  const handleIncreaseProductCount = () => {
    increaseQuantity('7cc3b7f5-11d2-4034-b975-d6ebbeadca14');
  };

  return (
    <MenuItem
      data={{ foo: 'includeIncreaseProductCountButton' }}
      onClick={handleIncreaseProductCount}
      key={'2'}
    >
      Increase count in cart.
    </MenuItem>
  );
};

const DecreaseProductCountButton: FC = () => {
  const { decreaseQuantity } = useCart();

  const handleDecreaseProductCount = () => {
    decreaseQuantity('7cc3b7f5-11d2-4034-b975-d6ebbeadca14');
  };

  return (
    <MenuItem
      data={{ foo: 'includeDecreaseProductCountButton' }}
      onClick={handleDecreaseProductCount}
      key={'3'}
    >
      Dencrease count in cart.
    </MenuItem>
  );
};
const CopyProductLink: FC = () => {
  const findLink = () => {
    alert('FindLink!');
  };

  return (
    <MenuItem
      data={{ foo: 'includeDecreaseProductCountButton' }}
      onClick={findLink}
      key={'4'}
    >
      Copy link
    </MenuItem>
  );
};
