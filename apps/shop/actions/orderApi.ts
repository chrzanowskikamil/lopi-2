import {
  CheckoutFormValues,
  SumaryNotificationData,
} from '../app/components/Order/Checkout/CheckoutForm/useCheckoutForm';
import { wrenchAppJson, wrenchCredencials } from '@lopi-2/common';

import { DeliveryMethodResponse } from '../types/DeliveryMethodResponse';
import { PaymentMethodResponse } from '../types/PaymentMethodResponse';
import { PayUOrderResponse } from '../types/PayUOrderResponse';
import { PayUOrderStatusResponse } from '../types/PayUOrderStatusResponse';

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

export async function createPayUOrder(orderUuid: string | undefined) {
  try {
    return wrenchCredencials
      .url(`payu/orders/${orderUuid}`)
      .headers({
        'Content-Type': 'application/json',
      })
      .post()
      .res(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(
            `Failed to create PayU order: ${res.statusText}` + error.message
          );
        }

        const payUOrderResponse: PayUOrderResponse = await res.json();

        localStorage.setItem('payUOrderId', payUOrderResponse.orderId);

        return payUOrderResponse;
      });
  } catch (error) {
    console.error(`Creating PayU order error: ${error}`);
    throw error;
  }
}

export async function getPaymentStatus(orderUuid: string) {

  try {

    return wrenchCredencials
      .url(`payu/orders/${orderUuid}`)
      .get()
      .res(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(
            `Failed to get payment status: ${res.statusText}` + error.message
          );
        }

        const payUOrderStatusResponse: PayUOrderStatusResponse =
          await res.json();

        if (
          payUOrderStatusResponse.orders?.length > 0
        ) {
          const firstOrder = payUOrderStatusResponse.orders[0];
          const orderStatus = firstOrder.status;

          return { orderStatus, payUOrderStatusResponse };
        } else {
          console.error('No orders.');

          return null;
        }
      });
  } catch (error) {
    console.error(`Getting payment status error: ${error}`);
    throw error;
  }

}
