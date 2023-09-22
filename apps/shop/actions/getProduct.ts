import { REVALIDATE_TIME } from '@lopi-2/common';
import { Product } from '../types/ProductsResponse';

export async function getProduct(uid: string): Promise<Product> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products/${uid}
      `,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const product: Product = await res.json();

    return product;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
