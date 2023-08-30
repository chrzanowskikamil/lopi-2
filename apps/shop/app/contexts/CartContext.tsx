import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ProductCart } from '../../types/ProductCart';

interface Product extends ProductCart {
  quantity: number;
}

interface CartContextProps {
  productsInCart: Product[];
  totalPrice: number;
  deliveryPrice: number;
  totalCost: number;
  deleteProduct: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getQuantityForProduct: (id: number) => number;
}

// INFO: This is mock data. It will be replaced by data from API in future ;).
const data: Product[] = [
  { id: 1, name: 'Ethiopia Emerald', price: 120, quantity: 1 },
  { id: 2, name: 'Ethiopia Tradition', price: 90, quantity: 1 },
  { id: 3, name: 'Golden Hills of Ethiopia', price: 102, quantity: 1 },
  { id: 4, name: 'Ethiopia Sunrise', price: 72, quantity: 1 },
  { id: 5, name: 'Ethiopia Adventure', price: 128, quantity: 1 },
];

const defaultContextValues = {
  productsInCart: data,
  totalPrice: 0,
  deliveryPrice: 0,
  totalCost: 0,
  getQuantityForProduct: () => {
    throw new Error('getQuantityForProduct must be used within a CartProvider');
  },
  deleteProduct: () => {
    throw new Error('deleteProduct must be used within a CartProvider');
  },
  increaseQuantity: () => {
    throw new Error('increaseQuantity must be used within a CartProvider');
  },
  decreaseQuantity: () => {
    throw new Error('decreaseQuantity must be used within a CartProvider');
  },
};

// TODO: apply type
const CartContext = createContext<CartContextProps>(
  defaultContextValues as any
);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>(data);

  const handleDeleteProduct = (id: number) => {
    setProductsInCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleIncreaseQuantity = (id: number) => {
    setProductsInCart((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setProductsInCart((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id && product.quantity > 1) {
          const newQuantity = product.quantity - 1;

          return { ...product, quantity: newQuantity };
        }

        return product;
      })
    );
  };

  const getQuantityForProduct = (id: number) => {
    const product = productsInCart.find((product) => product.id === id);

    return product?.quantity ?? 0;
  };

  const totalPrice = productsInCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const deliveryPrice = 0;

  const totalCost = totalPrice + deliveryPrice;

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        totalPrice,
        deliveryPrice,
        totalCost,
        getQuantityForProduct,
        deleteProduct: handleDeleteProduct,
        increaseQuantity: handleIncreaseQuantity,
        decreaseQuantity: handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
