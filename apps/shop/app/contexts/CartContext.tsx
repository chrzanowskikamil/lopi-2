import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CartProductsResponse } from '../../types/CartProductsResponse';
import {
  addToCart,
  getCartProducts,
  removeFromCart,
  updateCartQuantity,
} from '../../actions/cartApi';

interface CartContextProps {
  cartData: CartProductsResponse | null;
  totalPrice: number;
  deliveryPrice: number;
  totalCost: number;
  addProduct: (uid: string, quantity: number) => void;
  deleteProduct: (uid: string) => void;
  increaseQuantity: (uid: string) => void;
  decreaseQuantity: (uid: string) => void;
  getQuantityForProduct: (uid: string) => number;
  getPriceDetails: (uid: string) => {
    regularPrice: number;
    discountPrice: number | null;
  };
}

const CartContext = createContext<CartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartData, setCartData] = useState<CartProductsResponse | null>(null);
  const cartItems = cartData?.cartItems || [];

  useEffect(() => {
    getCartProducts()
      .then((res) => {
        setCartData(res);
      })
      .catch((error) => {
        console.error('Failed to get cart products', error);
      });
  }, []);

  const handleAddProduct = async (uid: string, quantity: number) => {
    try {
      await addToCart(uid, quantity);
      const updatedCart = await getCartProducts();
      setCartData(updatedCart);
    } catch (error) {
      console.error('Failed to add product to cart', error);
    }
  };

  const handleDeleteProduct = async (uid: string) => {
    try {
      await removeFromCart(uid);
      const updatedCart = await getCartProducts();
      setCartData(updatedCart);
    } catch (error) {
      console.error('Failed to delete product from cart', error);
    }
  };

  const updateQuantity = async (uid: string, quantity: number) => {
    try {
      const cartItem = cartItems.find((item) => item.product.uid === uid);

      if (cartItem) {
        const newQuantity = cartItem.quantity + quantity;

        if (newQuantity > 0) {
          await updateCartQuantity(uid, newQuantity);
          const updatedCart = await getCartProducts();
          setCartData(updatedCart);
        }
      }
    } catch (error) {
      console.error('Failed to update quantity', error);
    }
  };

  const handleIncreaseQuantity = async (uid: string) => {
    updateQuantity(uid, 1);
  };

  const handleDecreaseQuantity = async (uid: string) => {
    updateQuantity(uid, -1);
  };

  const getPriceDetails = (uid: string) => {
    const cartItem = cartItems.find((item) => item.product.uid === uid);

    if (!cartItem) return { regularPrice: 0, discountPrice: null };

    return {
      regularPrice: cartItem.product.regularPrice * cartItem.quantity,
      discountPrice: (cartItem.product.discountPrice || 0) * cartItem.quantity,
    };
  };

  const getQuantityForProduct = (uid: string) => {
    const cartItem = cartItems.find((item) => item.product.uid === uid);

    return cartItem?.quantity ?? 0;
  };

  let totalPrice = 0;
  if (cartItems) {
    totalPrice = cartItems.reduce<number>((acc, item) => {
      const price = item.product.discountPrice ?? item.product.regularPrice;

      return acc + price * item.quantity;
    }, 0);
  }

  const deliveryPrice = 0;

  const totalCost = totalPrice + deliveryPrice;

  return (
    <CartContext.Provider
      value={{
        cartData,
        totalPrice,
        deliveryPrice,
        totalCost,
        addProduct: handleAddProduct,
        getPriceDetails,
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
