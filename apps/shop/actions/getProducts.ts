import { REVALIDATE_TIME } from '@lopi-2/common';
import { ProductsResponse } from '../types/ProductsResponse';

const DEFAULT_PAGE_SIZE = 4;

export async function getProducts(
  size = DEFAULT_PAGE_SIZE,
  page = 0,
  sortType = 'regularPrice',
  sortOrder = 'asc'
): Promise<ProductsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products?page=${page}&size=${size}&sortType=${sortType}&sortOrder=${sortOrder}
      `,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const products: ProductsResponse = await res.json();
    console.table(products.products);

    return products;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
