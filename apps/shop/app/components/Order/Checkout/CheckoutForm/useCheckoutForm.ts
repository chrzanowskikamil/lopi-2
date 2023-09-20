import { useRouter } from 'next/navigation';
import { CheckoutFormSchema } from './CheckoutForm.schema';
import { useFormik } from 'formik';

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

    router.push('/order-summary');
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return formik;
};
