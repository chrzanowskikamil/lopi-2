import style from './PaymentMethods.module.scss';
import { FC } from 'react';
import { FormCheck, ListGroup } from 'react-bootstrap';

export const PaymentMethods: FC = () => {
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
          name={paymentMethod.name}
          label={paymentMethod.name}
        />
        <p>{paymentMethod.description}</p>
      </ListGroup.Item>
    );
  });

  return (
    <ListGroup className={style.listContainer}>{paymentMethodsList}</ListGroup>
  );
};
