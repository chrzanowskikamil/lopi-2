import { FetchedCategoryResponse } from '../types/FetchedCategoryResponse';

export async function getCategoriesName(): Promise<string[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
    );
    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);
    const allCategories: Array<FetchedCategoryResponse> = await res.json();
    return allCategories.map((category) => category.name);
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
