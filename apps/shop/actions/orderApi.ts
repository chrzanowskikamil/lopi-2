import { PaymentMethodResponse } from '../types/PaymentMethodResponse';

export async function getPaymentMethod() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}orders-setting/payment-method`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    if (!res.ok) throw new Error('Failed to fetch payment method');

    const paymentMethod: PaymentMethodResponse = await res.json();

    return paymentMethod;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
