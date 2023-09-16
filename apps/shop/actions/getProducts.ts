import { REVALIDATE_TIME } from '@lopi-2/common';
import { ProductsResponse } from '../types/ProductsResponse';
import {
  SortType,
  SortOrder,
} from '../app/components/Categories/CategoriesEnums';
import {
  DEFAULT_PAGE_SIZE,
  INITIAL_CURRENT_PAGE,
} from '../app/components/Categories/CategoriesVariables';

export async function getProducts(
  size = DEFAULT_PAGE_SIZE,
  page = INITIAL_CURRENT_PAGE,
  sortType = SortType.PRICE,
  sortOrder = SortOrder.ASCENDING
): Promise<ProductsResponse | undefined> {
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
    const isSyntaxError = (el: any) => {
      if (
        el.name === 'SyntaxError' &&
        el.message.includes('Unexpected end of JSON input')
      )
        return true;
      else return false;
    };

    if (isSyntaxError(error)) {
      console.warn('No more products in this category.');
    } else {
      console.error(`Fetching error: ${error}`);
      throw error;
    }
  }

  return;
}
