import { REVALIDATE_TIME } from '@lopi-2/common';
import { ProductsResponse } from '../types/ProductsResponse';

const DEFAULT_PAGE_SIZE = 4;

const SortType = {
  REGULAR_PRICE: 'regularPrice',
  DISCOUNT_PRICE: 'discountPrice',
  // Add other sorting options here as needed
};

// Enum for sortOrder
const SortOrder = {
  ASCENDING: 'asc',
  DESCENDING: 'desc',
  // Add other sorting orders here as needed
};

export async function getProducts(
  size = DEFAULT_PAGE_SIZE,
  page = 0,
  sortType = SortType.REGULAR_PRICE,
  sortOrder = SortOrder.ASCENDING
): Promise<ProductsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products?page=${page}&size=${size}&sortType=${sortType}&sortOrder=${sortOrder}
      `,
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
