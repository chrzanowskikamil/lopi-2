import style from './PaymentMethods.module.scss';
import { FC } from 'react';
import { Form, FormCheck, ListGroup } from 'react-bootstrap';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from '../../../../CheckoutForm/useCheckoutForm';

interface PaymentMethodsProps {
  formik: FormikProps<CheckoutFormValues>;
}

export const PaymentMethods: FC<PaymentMethodsProps> = ({ formik }) => {
  const paymentMethods = [
    {
      name: 'Przelew bankowy',
      description:
        'Dokonaj płatności bezpośrednio na nasze konto bankowe. Użyj identyfikatora zamówienia jako numeru referencyjnego płatności. Twoje zamówienie nie zostanie wysłane, dopóki środki nie zostaną zaksięgowane na naszym koncie',
    },
    {
      name: 'Płatność przy odbiorze',
      description: '',
    },
    {
      name: 'BLIK',
      description: '',
    },
    {
      name: 'PayPal',
      description: '',
    },
  ];

  const paymentMethodsList = paymentMethods.map((paymentMethod) => {
    return (
      <ListGroup.Item key={paymentMethod.name}>
        <FormCheck
          type="radio"
          name="paymentMethodName"
          value={paymentMethod.name}
          label={paymentMethod.name}
          checked={formik.values.paymentMethodName === paymentMethod.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.paymentMethodName && !formik.errors.paymentMethodName
          }
          isInvalid={
            formik.touched.paymentMethodName &&
            !!formik.errors.paymentMethodName
          }
        />
        <p>{paymentMethod.description}</p>
      </ListGroup.Item>
    );
  });

  return (
    <ListGroup className={style.listContainer}>
      <Form.Group controlId="paymentMethodName">
        {paymentMethodsList}
        <div className={style.formError}>{formik.errors.paymentMethodName}</div>
      </Form.Group>
    </ListGroup>
  );
};
