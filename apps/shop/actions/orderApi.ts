import {
  CheckoutFormValues,
  SumaryNotificationData,
} from '../app/components/Order/Checkout/CheckoutForm/useCheckoutForm';
import { wrenchAppJson, wrenchCredencials } from '@lopi-2/common';

import { DeliveryMethodResponse } from '../types/DeliveryMethodResponse';
import { PaymentMethodResponse } from '../types/PaymentMethodResponse';

export async function getPaymentMethod() {
  return await wrenchCredencials
    .url('orders-setting/payment-method')
    .get()
    .res((res) => {
      if (!res.ok) throw new Error('Failed to fetch payment method');
      else {
        return res.json() as Promise<PaymentMethodResponse>;
      }
    });
}

export async function getDeliveryMethod() {
  return wrenchCredencials
    .url('orders-setting/delivery-method')
    .get()
    .res((res) => {
      if (!res.ok) throw new Error('Failed to fetch delivery method');
      else {
        return res.json() as Promise<DeliveryMethodResponse>;
      }
    });
}

export async function createOrder(cartUuid: string, body: CheckoutFormValues) {
  return wrenchAppJson
    .url(`orders/create?cartUuid=${cartUuid}`)
    .body(JSON.stringify(body))
    .post()
    .res(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          `Failed to create order: ${res.statusText}` + error.message
        );
      } else {
        const order = await res.json();

        const sendSumaryNotificationData: SumaryNotificationData = {
          orderUuid: order.orderUid,
          email: order.customerEmail,
        };

        sendEmailNotification(sendSumaryNotificationData);

        return order;
      }
    })
    .catch((error) => {
      console.error(`Failed to create order: ${error}`);
      throw error;
    });
}

export async function sendEmailNotification(body: SumaryNotificationData) {
  return wrenchAppJson
    .url('orders/send-summary')
    .body(JSON.stringify(body))
    .post()
    .res(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          `Failed to send notification: ${res.statusText}` + error.message
        );
      }

      const summary = await res.json();

      return summary;
    })
    .catch((error) => {
      console.error(`Failed to send notification: ${error}`);
    });
}
