import { Product } from '../types/ProductsResponse';
import { wrenchRevalidate } from '@lopi-2/common';

export async function getProduct(uid: string): Promise<Product | null> {
  return wrenchRevalidate
    .url(`products/${uid}`)
    .get()
    .res(async (res) => {
      if (!res.ok) {
        console.error(`Server responded with ${res.statusText}`);

        return null;
      } else {
        const product: Product = await res.json();

        return product;
      }
    });
}
