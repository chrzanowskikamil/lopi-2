import { BuyNowBilboard } from './components/BuyNowBilboard/BuyNowBilboard';
import { MostPurchased } from './components/MostPurchased/MostPurchased';
import { Product } from '../../../../types/ProductsResponse';
import { getProductsMostPurchased } from '../../../../../shop/actions/getProductsMostPurchased';

export const ThirdSection = async () => {
  const mostPurchasedList: Product[] = await getProductsMostPurchased();
  const bilboardProduct = mostPurchasedList[0];

  return (
    <>
      <MostPurchased productList={mostPurchasedList} />
      <BuyNowBilboard bilboardProduct={bilboardProduct} />
    </>
  );
};
