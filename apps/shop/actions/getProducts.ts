import { REVALIDATE_TIME } from '@lopi-2/common';
import { ProductsResponse } from '../types/ProductsResponse';

const DEFAULT_PAGE_SIZE = 6;

export async function getProducts(
  size = DEFAULT_PAGE_SIZE,
  page = 0
): Promise<ProductsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products?page=${page}&size=${size}`,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const products: ProductsResponse = await res.json();
    return products;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
