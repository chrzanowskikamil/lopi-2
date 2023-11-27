import { Product } from '../types/ProductsResponse';
import { wrenchRevalidate } from '@lopi-2/common';

export async function getProductsMostPurchased(): Promise<Product[]> {
  const isSyntaxError = (error: unknown) => {
    if (error instanceof Error) {
      if (
        error.name === 'SyntaxError' &&
        error.message.includes('Unexpected end of JSON input')
      ) {
        return true;
      } else return false;
    }
  };

  return wrenchRevalidate
    .url('products/promotions')
    .get()
    .res(async (res) => {
      if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

      const products: Product[] = await res.json();

      //  //TODO: this should be limited on the BE side
      return products.slice(0, 4);
    })
    .catch((error) => {
      if (isSyntaxError(error)) {
        throw new Error('No more products in this category.');
      } else {
        return error;
      }
    });
}
