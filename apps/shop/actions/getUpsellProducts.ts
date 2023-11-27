import { getProduct } from './getProduct';
import { wrenchCredencials } from '@lopi-2/common';

type ProductProductsResponse = { products: { uid: string }[] };

export const getUpsellProducts = async () => {
  const getProductsTable: ProductProductsResponse = await wrenchCredencials
    .url('products')
    .get()
    .json();

  const similarProducts = await Promise.all([
    getProduct(getProductsTable.products[0].uid),
    getProduct(getProductsTable.products[1].uid),
    getProduct(getProductsTable.products[2].uid),
  ]);

  return similarProducts;
};
