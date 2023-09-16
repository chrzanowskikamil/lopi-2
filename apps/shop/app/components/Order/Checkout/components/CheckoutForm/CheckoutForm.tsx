import style from './CheckoutForm.module.scss';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const CheckoutForm: FC = () => {
  const links = {
    privacyPolicy: <Link href="/privacy-policy">Politykę Prywatności</Link>,
    rodo: <Link href="/rodo">RODO</Link>,
    statute: <Link href="/statute">Regulaminem</Link>,
  };

  return (
    <div className={style.checkoutFormContainer}>
      <h2>Dane do wysyłki</h2>
      <Form className={style.formContainer}>
        <Form.Group controlId="firstName">
          <Form.Control type="text" name="firstName" placeholder="Imię" />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control type="text" name="lastName" placeholder="Nazwisko" />
        </Form.Group>
        <Form.Select aria-label="Choose country">
          <option>Kraj</option>
          <option>Polska</option>
          <option>Niemcy</option>
          <option>Kambodża</option>
        </Form.Select>
        <Form.Group controlId="street">
          <Form.Control type="text" name="street" placeholder="Ulica" />
        </Form.Group>
        <Form.Group controlId="zipCode">
          <Form.Control type="text" name="zipCode" placeholder="Kod pocztowy" />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Control type="text" name="city" placeholder="Miasto" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Control type="text" name="phone" placeholder="Telefon" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control type="email" name="email" placeholder="E-mail" />
        </Form.Group>
        <Form.Group controlId="notes">
          <Form.Control
            as="textarea"
            name="notes"
            placeholder="Wiadomość do zamówienia"
          />
        </Form.Group>
        <Form.Group className={style.formCheck}>
          <Form.Check
            name="privacyPolicyAndRodo"
            label={
              <Fragment>
                *Zgadzam się na {links.privacyPolicy} i wyrażam zgodę na
                przetwarzanie danych osobowych zgodnie z {links.rodo}
              </Fragment>
            }
          />
          <Form.Check
            name="statute"
            label={<Fragment>*Zapoznałem/am się z {links.statute}</Fragment>}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
