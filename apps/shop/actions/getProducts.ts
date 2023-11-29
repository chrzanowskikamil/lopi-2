import {
  DEFAULT_PAGE_SIZE,
  INITIAL_AVAILABLITY_VALUE,
  INITIAL_CURRENT_PAGE,
  INITIAL_SORT_ORDER_VALUE,
  INITIAL_STATUS_VALUE,
} from '../app/components/Categories/CategoriesVariables';

import { ProductsResponse } from '../types/ProductsResponse';
import { SortType } from '@lopi-2/common';
import { wrenchRevalidate } from '@lopi-2/common';

type GetProductType = {
  size?: number;
  page?: number;
  sortType?: string;
  sortOrder?: boolean;
  status?: string;
  available?: boolean;
};

export async function getProducts(
  categoryUUID: string | undefined,
  possibleSearchOptions: GetProductType = {}
): Promise<ProductsResponse | undefined> {
  const {
    size = DEFAULT_PAGE_SIZE,
    page = INITIAL_CURRENT_PAGE,
    sortType = SortType.PRICE,
    sortOrder = INITIAL_SORT_ORDER_VALUE,
    status = INITIAL_STATUS_VALUE,
    available = INITIAL_AVAILABLITY_VALUE,
  } = possibleSearchOptions;

  const queryParams = new URLSearchParams({
    pageIndex: String(page),
    pageSize: String(size),
    orderColumn: String(sortType),
    ascending: String(sortOrder),
    status: String(status),
    available: String(available),
  });

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

  if (!categoryUUID) {
    return undefined;
  } else {
    return wrenchRevalidate
      .url(
        `products/by-category/${categoryUUID}/sorted?${queryParams.toString()}`
      )
      .get()
      .res(async (res) => {
        if (!res.ok) {
          console.log(new Error(`Server responsed with ${res.statusText}`));
        } else {
          const product: ProductsResponse = await res.json();

          return product;
        }
      })
      .catch((error) => {
        if (isSyntaxError(error)) {
          console.error('No more products in this category.');

          return undefined;
        }
      });
  }
}
