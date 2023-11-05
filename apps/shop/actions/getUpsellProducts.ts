import { getProduct } from './getProduct';

export const getUpsellProducts = async () => {
  const similarProducts = await Promise.all([
    getProduct('deacbd60-9d26-4d4c-bc08-af872a0245d6'),
    getProduct('f7d21472-688c-4049-95ce-a466a14cfcf0'),
    getProduct('dc8ba2a5-ae58-4494-a429-e59c0eee1617'),
  ]);

  return similarProducts;
};
