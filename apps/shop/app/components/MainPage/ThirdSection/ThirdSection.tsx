import { BuyNowBilboard } from './components/BuyNowBilboard/BuyNowBilboard';
import { MostPurchased } from './components/MostPurchased/MostPurchased';
import { Product } from '../../../../types/ProductsResponse';
import { getProductsMostPurchased } from '../../../../actions/getProductsMostPurchased';

export const ThirdSection = async () => {
  const mostPurchasedList: Product[] = await getProductsMostPurchased();
  const bilboardProduct = mostPurchasedList[0] || null;

  return (
    <>
      <MostPurchased productList={mostPurchasedList} />
      {!!bilboardProduct && (
        <BuyNowBilboard bilboardProduct={bilboardProduct} />
      )}
    </>
  );
};
