import {
  DEFAULT_PAGE_SIZE,
  INITIAL_CURRENT_PAGE,
} from '../app/components/Categories/CategoriesVariables';
import {
  SortOrder,
  SortType,
} from '../app/components/Categories/CategoriesEnums';

import { ProductsResponse } from '../types/ProductsResponse';
import { REVALIDATE_TIME } from '@lopi-2/common';

export async function getProducts(
  size = DEFAULT_PAGE_SIZE,
  page = INITIAL_CURRENT_PAGE,
  sortType = SortType.PRICE,
  sortOrder = SortOrder.ASCENDING
): Promise<ProductsResponse> {
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products?page=${page}&size=${size}&sort=${sortType}%2C${sortOrder}
      `,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const products: ProductsResponse = await res.json();

    return products;
  } catch (error) {
    if (isSyntaxError(error)) {
      throw alert('No more products in this category.');
    } else {
      console.error(`Fetching error: ${error}`);
      throw error;
    }
  }
}
