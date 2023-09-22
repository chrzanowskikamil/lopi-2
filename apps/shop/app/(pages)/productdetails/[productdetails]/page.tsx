import { ProductsDetails } from '../../../components/Products/ProductsDetails/ProductsDetails';
import { getProduct } from '../../../../actions/getProduct';
import { getUpsellProducts } from '../../../../actions/getUpsellProducts';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productdetails: string };
}) => {
  const product = await getProduct(params.productdetails);
  const upSellProducts = await getUpsellProducts();

  return <ProductsDetails product={product} upSellProducts={upSellProducts} />;
};

export default ProductDetailsPage;
