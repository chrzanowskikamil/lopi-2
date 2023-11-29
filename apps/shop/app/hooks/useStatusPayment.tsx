import { useEffect, useState } from 'react';
import { getPaymentStatus } from '../../actions/orderApi';

export const useStatusPayment = () => {
  const storedOrderId = typeof window !== 'undefined' ? localStorage.getItem('payUOrderId') : null;
  const orderData = storedOrderId ? { orderId: storedOrderId } : null;
  const orderId = orderData?.orderId;
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPaymentStatus = async () => {
      try {
        if (orderId) {
          const response = await getPaymentStatus(orderId);
          const statusCode = response?.orderStatus;
          if (isMounted && statusCode) {
            setPaymentStatus(statusCode);
          }
        }
      } catch (error) {
        console.error(`Error while fetching payment status: ${error}`);
      }
    };

    const intervalId = setInterval(async () => {
      await fetchPaymentStatus();

      if (paymentStatus === 'SUCCESS' || paymentStatus === 'CANCELLED') {
        clearInterval(intervalId);
      }
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [orderId, paymentStatus]);

  return {
    paymentStatus,
  };
};
