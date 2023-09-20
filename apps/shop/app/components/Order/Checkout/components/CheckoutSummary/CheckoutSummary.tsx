import style from './CheckoutSummary.module.scss';
import { FC } from 'react';
import { OrderSummary } from '../../../OrderSummary/OrderSummary';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';
import { Button } from '@lopi-2/common';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../CheckoutForm/useCheckoutForm';

interface CheckoutSummaryProps {
  formik: FormikProps<CheckoutFormValues>;
}

export const CheckoutSummary: FC<CheckoutSummaryProps> = ({ formik }) => {
  return (
    <div className={style.summaryContainer}>
      <OrderSummary />
      <PaymentMethods formik={formik} />
      <Button
        type="submit"
        title="Złóż zamówienie"
        disabled={!formik.isValid || !formik.dirty}
      />
    </div>
  );
};
