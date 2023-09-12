import { REVALIDATE_TIME } from '@lopi-2/common';
import { ProductsResponse } from '../types/ProductsResponse';

export async function getProduct(uid: string): Promise<ProductsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products/${uid}
      `,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const product: ProductsResponse = await res.json();

    return product;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
