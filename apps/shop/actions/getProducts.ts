import { ProductsResponse } from '../types/ProductsResponse';

export async function getProducts(
  size = 6,
  page = 0
): Promise<ProductsResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}products?page=${page}&size=${size}`
    );
    if (!res.ok) throw new Error(`Server responsed with ${res.statusText}`);
    const products: ProductsResponse = await res.json();
    return products;
  } catch (error) {
    console.error(`Fetching error: ${error}`);
    throw error;
  }
}
