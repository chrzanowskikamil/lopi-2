import { CartProductsResponse } from '../types/CartProductsResponse';
import { wrenchCredencials } from '@lopi-2/common';

export async function getCartProducts() {
  return wrenchCredencials
    .url('cart')
    .get()
    .json((res: CartProductsResponse) => {
      return res;
    });
}

export async function addToCart(uid: string, quantity = 1) {
  return wrenchCredencials
    .url(`cart?productUuid=${uid}&quantity=${quantity}`)
    .post()
    .res((res) => {
      if (!res.ok) return res;
    })
    .catch(() => alert('Reached maximum quantity of product in cart'));
}

export async function removeFromCart(uid: string) {
  return wrenchCredencials.url(`cart?productUuid=${uid}`).delete().res();
}

export async function updateCartQuantity(uid: string, quantity: number) {
  return wrenchCredencials
    .url(`cart?productUuid=${uid}&quantity=${quantity}`)
    .content('application/json')
    .put()
    .res((res) => {
      if (!res.ok) {
        throw new Error('Something went wrong' + res.statusText);
      }
    })
    .catch(() => alert('Reached maximum quantity of product in cart'));
}

export async function clearCart() {
  return await wrenchCredencials
    .url('cart')
    .delete()
    .res((res) => {
      if (!res.ok) throw new Error('Failed to clear cart' + res.statusText);
    })
    .catch((error) => console.error(`Cannot clear cart: ${error}`));
}
