import { getDeliveryMethod, getPaymentMethod } from '../../../actions/orderApi';
import { Checkout } from '../../components/Order/Checkout/Checkout';

const CheckoutPage = async () => {
  const deliveryMethod = await getDeliveryMethod();
  const paymentMethod = await getPaymentMethod();

  return (
    <Checkout deliveryMethod={deliveryMethod} paymentMethod={paymentMethod} />
  );
};

export default CheckoutPage;
