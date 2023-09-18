import { ProductsDetails } from '../../../components/Products/ProductsDetails/ProductsDetails';
import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productdetails: string };
}) => {
  const product = await getProduct(params.productdetails);

  return <>{<ProductsDetails product={product} />}</>;
};

export default ProductDetailsPage;
