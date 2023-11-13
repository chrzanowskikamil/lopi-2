import { Product } from '../types/ProductsResponse';
import { REVALIDATE_TIME } from '@lopi-2/common';

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

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products/promotions
      `,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const products: Product[] = await res.json();

    //TODO: this should be limited on the BE side
    return products.slice(0, 4);
  } catch (error) {
    if (isSyntaxError(error)) {
      throw alert('No more products in this category.');
    } else {
      console.error(`Fetching error: ${error}`);
      throw error;
    }
  }
}
