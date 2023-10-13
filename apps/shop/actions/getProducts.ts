import {
  DEFAULT_PAGE_SIZE,
  INITIAL_ASCENDING_VALUE,
  INITIAL_CURRENT_PAGE,
} from '../app/components/Categories/CategoriesVariables';

import { ProductsResponse } from '../types/ProductsResponse';
import { REVALIDATE_TIME } from '@lopi-2/common';
import { SortOrder } from '../app/components/Categories/CategoriesEnums';

type GetProductType = {
  size?: number;
  page?: number;
  sortOrder?: string;
  ascending?: boolean;
};

export async function getProducts(
  categoryUUID: string,
  possibleSearchOptions: GetProductType = {}
): Promise<ProductsResponse> {
  const {
    size = DEFAULT_PAGE_SIZE,
    page = INITIAL_CURRENT_PAGE,
    sortOrder = SortOrder.NAME,
    ascending = INITIAL_ASCENDING_VALUE,
  } = possibleSearchOptions;

  const queryParams = new URLSearchParams({
    pageIndex: String(page),
    pageSize: String(size),
    orderColumn: String(sortOrder),
    ascending: String(ascending),
  });

  const url = `
  ${
    process.env.NEXT_PUBLIC_API_BASE_URL
  }products/by-category/${categoryUUID}/sorted?${queryParams.toString()}
    `;

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
    const res = await fetch(url, { next: { revalidate: REVALIDATE_TIME } });

    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);

    const product: ProductsResponse = await res.json();

    return product;
  } catch (error) {
    if (isSyntaxError(error)) {
      throw alert('No more products in this category.');
    } else {
      console.error(`Fetching error: ${error}`);
      throw error;
    }
  }
}
