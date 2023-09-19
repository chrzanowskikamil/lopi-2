import { ProductsDetails } from '../../../components/Products/ProductsDetails/ProductsDetails';
import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productdetails: string };
}) => {
  const product = await getProduct(params.productdetails);

  const productOne = await getProduct('b5fba84e-1729-4d99-8412-8421d44a2a85');
  const productTwo = await getProduct('143a761d-2015-48fb-96bf-b02e04752bd4');
  const productThree = await getProduct('b5fba84e-1729-4d99-8412-8421d44a2a85');

  const productArray = [productOne, productTwo, productThree];

  return (
    <>{<ProductsDetails product={product} productArray={productArray} />}</>
  );
};

export default ProductDetailsPage;
