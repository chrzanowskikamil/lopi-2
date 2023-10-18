import { FC } from 'react';
import { MenuItem } from 'react-contextmenu';
import style from './contextMenu.module.scss';
import { useCart } from '../../contexts/CartContext';

interface ContextBuilder {
  includeAddProductButton(): void;
  includeIncreaseProductCountButton(): void;
  includeDecreaseProductCountButton(): void;
  includeCopyProductLink(): void;
  // Buttons might be in disabled mode while suggested action might not be available.
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
    this.contextMenu.parts.push(<ProductButton uid={this.uid} />);
  }

  public includeIncreaseProductCountButton(): void {
    this.contextMenu.parts.push(<IncreaseProductCountButton uid={this.uid} />);
  }

  public includeDecreaseProductCountButton(): void {
    this.contextMenu.parts.push(<DecreaseProductCountButton uid={this.uid} />);
  }

  public includeCopyProductLink(): void {
    this.contextMenu.parts.push(<CopyProductLink uid={this.uid} />);
  }

  public getProduct(): ContextMenu {
    const result = this.contextMenu;
    this.reset();

    return result;
  }
}

export class ContextMenu {
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

  public buildFullFeaturedCartContextMenu(): void {
    this.builder.includeAddProductButton();
    this.builder.includeIncreaseProductCountButton();
    this.builder.includeDecreaseProductCountButton();
    this.builder.includeCopyProductLink();
  }
}

export function clientCode(director: Director, uid: string) {
  const builder = new ContextConcreteBuilder(uid);
  director.setBuilder(builder);
  director.buildFullFeaturedCartContextMenu();

  return builder.getProduct();
}

export const director = new Director();

//components secrion

type CartContextMenuButtonProps = {
  uid: string;
};

const ProductButton: FC<CartContextMenuButtonProps> = ({ uid }) => {
  const { addProduct } = useCart();

  const handleAddProduct = () => {
    addProduct(uid, 1);
  };

  return (
    <MenuItem
      data={{ foo: 'includeAddProductButton' }}
      onClick={handleAddProduct}
      key={'1'}
      className={style.contextMenuItem}
    >
      AddProduct.
    </MenuItem>
  );
};

const IncreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
  uid,
}) => {
  const { increaseQuantity } = useCart();

  const handleIncreaseProductCount = () => {
    increaseQuantity(uid);
  };

  return (
    <MenuItem
      data={{ foo: 'includeIncreaseProductCountButton' }}
      onClick={handleIncreaseProductCount}
      key={'2'}
      className={style.contextMenuItem}
    >
      Increase count in cart.
    </MenuItem>
  );
};

const DecreaseProductCountButton: FC<CartContextMenuButtonProps> = ({
  uid,
}) => {
  const { decreaseQuantity } = useCart();

  const handleDecreaseProductCount = () => {
    decreaseQuantity(uid);
  };

  return (
    <MenuItem
      data={{ foo: 'includeDecreaseProductCountButton' }}
      onClick={handleDecreaseProductCount}
      key={'3'}
      className={style.contextMenuItem}
    >
      Dencrease count in cart.
    </MenuItem>
  );
};
const CopyProductLink: FC<CartContextMenuButtonProps> = ({ uid }) => {
  const findLink = () => {
    alert(`FindLink for ${uid}!`);
  };

  return (
    <MenuItem
      data={{ foo: 'includeDecreaseProductCountButton' }}
      onClick={findLink}
      key={'4'}
      className={style.contextMenuItem}
    >
      Copy link
    </MenuItem>
  );
};
