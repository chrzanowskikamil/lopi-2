import { CartProductsResponse } from '../types/CartProductsResponse';

export async function getCartProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}cart`, {
      method: 'GET',
      credentials: 'include',
    });
    const productsInCart: CartProductsResponse = await res.json();

    return productsInCart;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}

export async function addToCart(uid: string, quantity = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}cart?productUuid=${uid}&quantity=${quantity}`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );
    if (!res.ok) return;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}

export async function removeFromCart(uid: string) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}cart/${uid}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}

export async function updateCartQuantity(uid: string, quantity: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}cart?productUuid=${uid}&quantity=${quantity}`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      throw new Error('Something went wrong' + res.statusText);
    }
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
