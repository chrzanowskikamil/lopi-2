import * as ErrorTypes from '@lopi-2/common';

import { wrenchRevalidateFalse } from '@lopi-2/common';

export async function getCategoryQuantityByUUID(
  categoryUUID: string
): Promise<number> {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiUrl) throw new Error(ErrorTypes.ENVIROMENT_ERROR);

  return wrenchRevalidateFalse
    .url(`categories/${categoryUUID}/product-quantity`)
    .get()
    .res(async (res) => {
      if (!res.ok)
        throw new Error(
          `${ErrorTypes.API_RESPONSE_ERROR} Server responsed with ${res.statusText} - ${res.status}`
        );

      const productQuantity = await res.json();

      return parseInt(productQuantity);
    });
}
