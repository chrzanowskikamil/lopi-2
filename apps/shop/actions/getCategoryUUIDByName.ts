import * as ErrorTypes from '../types/ApiErrors';

import { FetchedCategoryResponse } from '../types/FetchedCategoryResponse';
import { REVALIDATE_TIME } from '@lopi-2/common';

export async function getCategoryUUIDByName(
  categoryName: string
): Promise<string> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiUrl) throw new Error(ErrorTypes.ENVIROMENT_ERROR);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}categories`,
      { next: { revalidate: REVALIDATE_TIME } }
    );

    if (!res.ok)
      throw new Error(
        `${ErrorTypes.API_RESPONSE_ERROR} Server responsed with ${res.statusText} - ${res.status}`
      );

    const allCategories: Array<FetchedCategoryResponse> = await res.json();
    if (!Array.isArray(allCategories)) {
      throw new Error(ErrorTypes.API_DATA_ERROR);
    }

    const categoryUUID: string = allCategories.find(
      (category) => category.name === `${categoryName}`
    ).uid;

    return categoryUUID;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.error(ErrorTypes.API_CONNECTION_ERROR);
      throw new Error(ErrorTypes.API_CONNECTION_ERROR);
    }
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
