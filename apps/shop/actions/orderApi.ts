import { PaymentMethodResponse } from '../types/PaymentMethodResponse';
import { DeliveryMethodResponse } from '../types/DeliveryMethodResponse';
import { CheckoutFormValues } from '../app/components/Order/Checkout/CheckoutForm/useCheckoutForm';

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

export async function getDeliveryMethod() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}orders-setting/delivery-method`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    if (!res.ok) throw new Error('Failed to fetch delivery method');

    const deliveryMethod: DeliveryMethodResponse = await res.json();

    return deliveryMethod;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}

export async function createOrder(cartUuid: string, body: CheckoutFormValues) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}orders/create?cartUuid=${cartUuid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to create order: ${res.statusText}` + error.message
      );
    }

    const order = await res.json();

    return order;
  } catch (error) {
    console.error(`Failed to create order: ${error}`);
    throw error;
  }
}
