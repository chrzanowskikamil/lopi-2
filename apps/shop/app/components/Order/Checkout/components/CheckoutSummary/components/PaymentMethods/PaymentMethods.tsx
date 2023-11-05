import style from './PaymentMethods.module.scss';
import { FC } from 'react';
import { Form, FormCheck, ListGroup } from 'react-bootstrap';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../../../CheckoutForm/useCheckoutForm';
import { PaymentMethodResponse } from '../../../../../../../../types/PaymentMethodResponse';

interface PaymentMethodsProps {
  formRef: FormikProps<CheckoutFormValues>;
  paymentMethod: PaymentMethodResponse;
}

export const PaymentMethods: FC<PaymentMethodsProps> = ({
  formRef,
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
            checked={formRef.values.paymentMethodName === method.name}
            onBlur={formRef.handleBlur}
            onChange={formRef.handleChange}
            isValid={
              formRef.touched.paymentMethodName &&
              !formRef.errors.paymentMethodName
            }
            isInvalid={
              formRef.touched.paymentMethodName &&
              !!formRef.errors.paymentMethodName
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
        <div className={style.formError}>
          {formRef.errors.paymentMethodName}
        </div>
      </Form.Group>
    </ListGroup>
  );
};
