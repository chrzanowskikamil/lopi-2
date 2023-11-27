import * as ErrorTypes from '@lopi-2/common';

import { FetchedCategoryResponse } from '../types/FetchedCategoryResponse';
import { wrenchRevalidate } from '@lopi-2/common';

export async function getCategories(): Promise<FetchedCategoryResponse[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiUrl) throw new Error(ErrorTypes.ENVIROMENT_ERROR);

  return wrenchRevalidate
    .url('categories')
    .get()
    .res(async (res) => {
      if (!res.ok)
        throw new Error(
          `${ErrorTypes.API_RESPONSE_ERROR} Server responded with ${res.statusText} - ${res.status}`
        );

      const allCategories: Array<FetchedCategoryResponse> = await res.json();

      if (!Array.isArray(allCategories)) {
        throw new Error(ErrorTypes.API_DATA_ERROR);
      }

      return allCategories;
    });
}
