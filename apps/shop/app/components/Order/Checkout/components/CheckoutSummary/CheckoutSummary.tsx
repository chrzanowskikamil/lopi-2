import style from './CheckoutSummary.module.scss';
import { FC } from 'react';
import { OrderSummary } from '../../../OrderSummary/OrderSummary';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';
import { Button } from '@lopi-2/common';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../CheckoutForm/useCheckoutForm';
import { PaymentMethodResponse } from '../../../../../../types/PaymentMethodResponse';

interface CheckoutSummaryProps {
  formik: FormikProps<CheckoutFormValues>;
  paymentMethod: PaymentMethodResponse;
}

export const CheckoutSummary: FC<CheckoutSummaryProps> = ({
  formik,
  paymentMethod,
}) => {
  return (
    <div className={style.summaryContainer}>
      <OrderSummary />
      <PaymentMethods formik={formik} paymentMethod={paymentMethod} />
      <Button
        type="submit"
        title="Złóż zamówienie"
        disabled={!formik.isValid || !formik.dirty}
      />
    </div>
  );
};
