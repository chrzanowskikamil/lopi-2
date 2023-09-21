import style from './PaymentMethods.module.scss';
import { FC } from 'react';
import { Form, FormCheck, ListGroup } from 'react-bootstrap';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../../../CheckoutForm/useCheckoutForm';
import { PaymentMethodResponse } from '../../../../../../../../types/PaymentMethodResponse';

interface PaymentMethodsProps {
  formik: FormikProps<CheckoutFormValues>;
  paymentMethod: PaymentMethodResponse;
}

export const PaymentMethods: FC<PaymentMethodsProps> = ({
  formik,
  paymentMethod,
}) => {
  const paymentMethodsList = paymentMethod.methodResponseDTOList.map(
    (method) => {
      return (
        <ListGroup.Item key={method.name}>
          <FormCheck
            type="radio"
            name="paymentMethodName"
            value={method.name}
            label={method.name}
            checked={formik.values.paymentMethodName === method.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isValid={
              formik.touched.paymentMethodName &&
              !formik.errors.paymentMethodName
            }
            isInvalid={
              formik.touched.paymentMethodName &&
              !!formik.errors.paymentMethodName
            }
          />
          <p>{method.description}</p>
        </ListGroup.Item>
      );
    }
  );

  return (
    <ListGroup className={style.listContainer}>
      <Form.Group controlId="paymentMethodName">
        {paymentMethodsList}
        <div className={style.formError}>{formik.errors.paymentMethodName}</div>
      </Form.Group>
    </ListGroup>
  );
};
