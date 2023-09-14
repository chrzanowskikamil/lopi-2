import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productdetails: string };
}) => {
  const product = await getProduct(params.productdetails);

  return <>{JSON.stringify(product)}</>;
};

export default ProductDetailsPage;
