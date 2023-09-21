import { ProductsDetails } from '../../../components/Products/ProductsDetails/ProductsDetails';
import { getProduct } from '../../../../actions/getProduct';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productDetails: string };
}) => {
  const product = await getProduct(params.productDetails);

  const productArray = await Promise.all([
    getProduct('b5fba84e-1729-4d99-8412-8421d44a2a85'),
    getProduct('143a761d-2015-48fb-96bf-b02e04752bd4'),
    getProduct('b5fba84e-1729-4d99-8412-8421d44a2a85'),
  ]);

  return (
    <>{<ProductsDetails product={product} productArray={productArray} />}</>
  );
};

export default ProductDetailsPage;
