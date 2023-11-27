import {
  DEFAULT_PAGE_SIZE,
  INITIAL_ASCENDING_VALUE,
  INITIAL_CURRENT_PAGE,
} from '../app/components/Categories/CategoriesVariables';

import { ProductsResponse } from '../types/ProductsResponse';
import { SortOrder } from '../app/components/Categories/CategoriesEnums';
import { wrenchRevalidate } from '@lopi-2/common';

type GetProductType = {
  size?: number;
  page?: number;
  sortOrder?: string;
  ascending?: boolean;
};

export async function getProducts(
  categoryUUID: string | undefined,
  possibleSearchOptions: GetProductType = {}
): Promise<ProductsResponse | undefined> {
  const {
    size = DEFAULT_PAGE_SIZE,
    page = INITIAL_CURRENT_PAGE,
    sortOrder = SortOrder.PRICE,
    ascending = INITIAL_ASCENDING_VALUE,
  } = possibleSearchOptions;

  const queryParams = new URLSearchParams({
    pageIndex: String(page),
    pageSize: String(size),
    orderColumn: String(sortOrder),
    ascending: String(ascending),
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
