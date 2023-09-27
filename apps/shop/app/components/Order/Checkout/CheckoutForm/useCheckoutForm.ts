import { CheckoutFormSchema } from './CheckoutForm.schema';
import { OrderResponse } from '../../../../../types/OrderResponse';
import { createOrder } from '../../../../../actions/orderApi';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../../contexts/CartContext';
import { useOrderContext } from '../../../../contexts/OrderContext';

interface AddressSchema {
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: string;
}

export interface CheckoutFormValues {
  customerType: string;
  nip?: string;
  companyName?: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  deliveryMethodName: string;
  shippingAddress: AddressSchema;
  useSameAddress: boolean;
  billingAddress: AddressSchema;
  paymentMethodName: string;
  termsAccepted: boolean;
}

export const useCheckoutForm = () => {
  const { cartData } = useCart();
  const { setOrderData } = useOrderContext();
  const router = useRouter();

  const initialShippingAddress: AddressSchema = {
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    postalCode: '',
    city: '',
    country: '',
    phoneNumber: '',
  };

  const initialValues: CheckoutFormValues = {
    customerType: '',
    nip: '',
    companyName: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    deliveryMethodName: '',
    shippingAddress: { ...initialShippingAddress },
    useSameAddress: true,
    billingAddress: { ...initialShippingAddress },
    paymentMethodName: '',
    termsAccepted: false,
  };

  const validationSchema = CheckoutFormSchema;

  const onSubmit = async (values: CheckoutFormValues) => {
    if (values.useSameAddress) {
      values.billingAddress = { ...values.shippingAddress };
    }

    try {
      const orderResponse: OrderResponse = await createOrder(
        cartData?.uuid as string,
        values
      );
      setOrderData(orderResponse);
      router.push('/order-summary');

      // TODO: Implement function to clear cart
      // At the moment we havent information
      // about products in cart from orderResponse.
      // Now if we clear cart, we will not see products
      // in order-summary page.

      // handleClearCart();
    } catch (error) {
      console.error(`Failed to create order: ${error}`);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return formik;
};
