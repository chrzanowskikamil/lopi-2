import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { OrderResponse } from '../../types/OrderResponse';

interface OrderContextProps {
  orderData: OrderResponse | null;
  setOrderData: Dispatch<SetStateAction<OrderResponse | null>>;
}

const OrderContext = createContext<OrderContextProps | null>(null);

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider');
  }

  return context;
};

export const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [orderData, setOrderData] = useState<OrderResponse | null>(null);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
