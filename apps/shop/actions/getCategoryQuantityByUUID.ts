import * as ErrorTypes from '../types/ApiErrors';

export async function getCategoryQuantityByUUID(
  categoryUUID: string
): Promise<number> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiUrl) throw new Error(ErrorTypes.ENVIROMENT_ERROR);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}categories/${categoryUUID}/product-quantity`,
      { next: { revalidate: false } }
    );

    if (!res.ok)
      throw new Error(
        `${ErrorTypes.API_RESPONSE_ERROR} Server responsed with ${res.statusText} - ${res.status}`
      );

    const productQuantity = await res.json();

    return parseInt(productQuantity);
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.error(ErrorTypes.API_CONNECTION_ERROR);
      throw new Error(ErrorTypes.API_CONNECTION_ERROR);
    }
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
