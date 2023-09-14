import { ProductsDetailed } from '../../../components/Products/ProductsDetailed/ProductsDetailed';
import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productdetails: string };
}) => {
  const product = await getProduct(params.productdetails);

  return <>{<ProductsDetailed product={product} />}</>;
};

export default ProductDetailsPage;
