import { AppRoutes } from '@lopi-2/common';
import { CheckoutFormSchema } from './CheckoutForm.schema';
import { OrderResponse } from '../../../../../types/OrderResponse';
import { createOrder } from '../../../../../actions/orderApi';
import { useCart } from '../../../../contexts/CartContext';
import { useFormik } from 'formik';
import { useOrderContext } from '../../../../contexts/OrderContext';
import { useRouter } from 'next/navigation';

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

export type SumaryNotificationData = {
  orderUuid: string;
  email: string;
};

export const useCheckoutForm = () => {
  const { cartData, handleClearCart } = useCart();
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

      router.push(AppRoutes.getOrderSummary());

      handleClearCart();
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
