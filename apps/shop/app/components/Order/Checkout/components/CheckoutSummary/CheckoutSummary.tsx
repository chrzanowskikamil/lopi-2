import style from './CheckoutSummary.module.scss';
import { FC } from 'react';
import { OrderSummary } from '../../../OrderSummary/OrderSummary';
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods';
import { Button } from '@lopi-2/common';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../CheckoutForm/useCheckoutForm';
import { PaymentMethodResponse } from '../../../../../../types/PaymentMethodResponse';

interface CheckoutSummaryProps {
  formRef: FormikProps<CheckoutFormValues>;
  paymentMethod: PaymentMethodResponse;
}

export const CheckoutSummary: FC<CheckoutSummaryProps> = ({
  formRef,
  paymentMethod,
}) => {
  return (
    <div className={style.summaryContainer}>
      <OrderSummary />
      <PaymentMethods formRef={formRef} paymentMethod={paymentMethod} />
      <Button
        type="submit"
        title="Złóż zamówienie"
        disabled={!formRef.isValid || !formRef.dirty}
      />
    </div>
  );
};
