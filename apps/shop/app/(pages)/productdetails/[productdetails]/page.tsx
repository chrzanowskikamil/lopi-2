// import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({ params }: { params: { uid: string } }) => {
  // const product = await getProduct(params.uid);
  console.log(params.uid);
  // const param = params;

  return <>{typeof params.uid}</>;
};

export default ProductDetailsPage;
