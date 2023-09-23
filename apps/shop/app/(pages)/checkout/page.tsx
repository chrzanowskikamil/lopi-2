import { getPaymentMethod } from '../../../actions/orderApi';
import { Checkout } from '../../components/Order/Checkout/Checkout';

const CheckoutPage = async () => {
  const paymentMethod = await getPaymentMethod();

  return <Checkout paymentMethod={paymentMethod} />;
};

export default CheckoutPage;
