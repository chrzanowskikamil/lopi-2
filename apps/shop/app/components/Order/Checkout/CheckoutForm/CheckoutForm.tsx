'use client';
import style from './CheckoutForm.module.scss';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from './useCheckoutForm';

interface CheckoutFormProps {
  formik: FormikProps<CheckoutFormValues>;
}

export const CheckoutForm: FC<CheckoutFormProps> = ({ formik }) => {
  const links = {
    privacyPolicy: <Link href="/privacy-policy">Politykę Prywatności</Link>,
    rodo: <Link href="/rodo">RODO</Link>,
    statute: <Link href="/statute">Regulaminem</Link>,
  };

  return (
    <div className={style.checkoutFormContainer}>
      <h2>Dane do wysyłki</h2>
      <Form.Group controlId="customerType">
        <Form.Select
          aria-label="choose coutomer type"
          placeholder={'Wybierz typ klienta'}
          value={formik.values.customerType}
          onChange={formik.handleChange}
          isValid={formik.touched.customerType && !formik.errors.customerType}
          isInvalid={
            formik.touched.customerType && !!formik.errors.customerType
          }
        >
          <option>Typ klienta</option>
          <option value="INDIVIDUAL">Osoba prywatna</option>
          <option value="COMPANY">Firma</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.customerType}
        </Form.Control.Feedback>
      </Form.Group>
      {formik.values.customerType === 'COMPANY' && (
        <>
          <Form.Group controlId="companyName">
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Nazwa firmy"
              value={formik.values.companyName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.companyName && !formik.errors.companyName}
              isInvalid={
                formik.touched.companyName && !!formik.errors.companyName
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.companyName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="nip">
            <Form.Control
              type="text"
              name="nip"
              placeholder="NIP"
              value={formik.values.nip}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={formik.touched.nip && !formik.errors.nip}
              isInvalid={formik.touched.nip && !!formik.errors.nip}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.nip}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
      <Form.Group controlId="salutation">
        <Form.Select
          aria-label="choose salutation"
          value={formik.values.salutation}
          onChange={formik.handleChange}
          isValid={formik.touched.salutation && !formik.errors.salutation}
          isInvalid={formik.touched.salutation && !!formik.errors.salutation}
        >
          <option>Tytuł</option>
          <option value="MR">Pan</option>
          <option value="MRS">Pani</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.salutation}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Control
          type="text"
          name="firstName"
          placeholder="Imię"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={formik.touched.firstName && !formik.errors.firstName}
          isInvalid={formik.touched.firstName && !!formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={formik.touched.lastName && !formik.errors.lastName}
          isInvalid={formik.touched.lastName && !!formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          name="email"
          placeholder="E-mail"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && !!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="deliveryMethodName">
        <Form.Select
          aria-label="choose delivery method"
          value={formik.values.deliveryMethodName}
          onChange={formik.handleChange}
        >
          <option>Rodzaj dostawy</option>
          <option value="INPOST">InPost</option>
          <option value="DPD">DPD</option>
          <option value="PACZKOMATY">Paczkomaty</option>
          <option value="PERSONAL">Odbiór osobisty</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="shippingAddressStreet">
        <Form.Control
          type="text"
          name="shippingAddress.street"
          placeholder="Ulica"
          value={formik.values.shippingAddress.street}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.street &&
            !formik.errors.shippingAddress?.street
          }
          isInvalid={
            formik.touched.shippingAddress?.street &&
            !!formik.errors.shippingAddress?.street
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.street}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressHouseNumber">
        <Form.Control
          type="text"
          name="shippingAddress.houseNumber"
          placeholder="Numer domu"
          value={formik.values.shippingAddress.houseNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.houseNumber &&
            !formik.errors.shippingAddress?.houseNumber
          }
          isInvalid={
            formik.touched.shippingAddress?.houseNumber &&
            !!formik.errors.shippingAddress?.houseNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.houseNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressApartmentNumber">
        <Form.Control
          type="text"
          name="shippingAddress.apartmentNumber"
          placeholder="Numer mieszkania"
          value={formik.values.shippingAddress.apartmentNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.apartmentNumber &&
            !formik.errors.shippingAddress?.apartmentNumber
          }
          isInvalid={
            formik.touched.shippingAddress?.apartmentNumber &&
            !!formik.errors.shippingAddress?.apartmentNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.apartmentNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressPostalCode">
        <Form.Control
          type="text"
          name="shippingAddress.postalCode"
          placeholder="Kod pocztowy"
          value={formik.values.shippingAddress.postalCode}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.postalCode &&
            !formik.errors.shippingAddress?.postalCode
          }
          isInvalid={
            formik.touched.shippingAddress?.postalCode &&
            !!formik.errors.shippingAddress?.postalCode
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.postalCode}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressCity">
        <Form.Control
          type="text"
          name="shippingAddress.city"
          placeholder="Miasto"
          value={formik.values.shippingAddress.city}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.city &&
            !formik.errors.shippingAddress?.city
          }
          isInvalid={
            formik.touched.shippingAddress?.city &&
            !!formik.errors.shippingAddress?.city
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.city}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressCountry">
        <Form.Control
          type="text"
          name="shippingAddress.country"
          placeholder="Kraj"
          value={formik.values.shippingAddress.country}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.country &&
            !formik.errors.shippingAddress?.country
          }
          isInvalid={
            formik.touched.shippingAddress?.country &&
            !!formik.errors.shippingAddress?.country
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.country}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressPhoneNumber">
        <Form.Control
          type="text"
          name="shippingAddress.phoneNumber"
          placeholder="Telefon"
          value={formik.values.shippingAddress.phoneNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={
            formik.touched.shippingAddress?.phoneNumber &&
            !formik.errors.shippingAddress?.phoneNumber
          }
          isInvalid={
            formik.touched.shippingAddress?.phoneNumber &&
            !!formik.errors.shippingAddress?.phoneNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.shippingAddress?.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className={style.formCheck}>
        <Form.Check
          name="useSameAddress"
          label="Adres na fakturze będzie taki sam jak adres dostawy"
          checked={formik.values.useSameAddress}
          onChange={formik.handleChange}
        />
      </Form.Group>
      {!formik.values.useSameAddress && (
        <>
          <Form.Group controlId="billingAddressStreet">
            <Form.Control
              type="text"
              name="billingAddress.street"
              placeholder="Ulica"
              value={formik.values.billingAddress.street}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.street &&
                !formik.errors.billingAddress?.street
              }
              isInvalid={
                formik.touched.billingAddress?.street &&
                !!formik.errors.billingAddress?.street
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.street}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressHouseNumber">
            <Form.Control
              type="text"
              name="billingAddress.houseNumber"
              placeholder="Numer domu"
              value={formik.values.billingAddress.houseNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.houseNumber &&
                !formik.errors.billingAddress?.houseNumber
              }
              isInvalid={
                formik.touched.billingAddress?.houseNumber &&
                !!formik.errors.billingAddress?.houseNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.houseNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressApartmentNumber">
            <Form.Control
              type="text"
              name="billingAddress.apartmentNumber"
              placeholder="Numer mieszkania"
              value={formik.values.billingAddress.apartmentNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.apartmentNumber &&
                !formik.errors.billingAddress?.apartmentNumber
              }
              isInvalid={
                formik.touched.billingAddress?.apartmentNumber &&
                !!formik.errors.billingAddress?.apartmentNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.apartmentNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressPostalCode">
            <Form.Control
              type="text"
              name="billingAddress.postalCode"
              placeholder="Kod pocztowy"
              value={formik.values.billingAddress.postalCode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.postalCode &&
                !formik.errors.billingAddress?.postalCode
              }
              isInvalid={
                formik.touched.billingAddress?.postalCode &&
                !!formik.errors.billingAddress?.postalCode
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.postalCode}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressCity">
            <Form.Control
              type="text"
              name="billingAddress.city"
              placeholder="Miasto"
              value={formik.values.billingAddress.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.city &&
                !formik.errors.billingAddress?.city
              }
              isInvalid={
                formik.touched.billingAddress?.city &&
                !!formik.errors.billingAddress?.city
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressCountry">
            <Form.Control
              type="text"
              name="billingAddress.country"
              placeholder="Kraj"
              value={formik.values.billingAddress.country}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.country &&
                !formik.errors.billingAddress?.country
              }
              isInvalid={
                formik.touched.billingAddress?.country &&
                !!formik.errors.billingAddress?.country
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.country}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressPhoneNumber">
            <Form.Control
              type="text"
              name="billingAddress.phoneNumber"
              placeholder="Telefon"
              value={formik.values.billingAddress.phoneNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isValid={
                formik.touched.billingAddress?.phoneNumber &&
                !formik.errors.billingAddress?.phoneNumber
              }
              isInvalid={
                formik.touched.billingAddress?.phoneNumber &&
                !!formik.errors.billingAddress?.phoneNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.billingAddress?.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
      <Form.Group className={style.formCheck}>
        <Form.Check
          name="termsAccepted"
          label={
            <Fragment>
              *Zgadzam się na {links.privacyPolicy} i wyrażam zgodę na
              przetwarzanie danych osobowych zgodnie z {links.rodo} oraz
              zapoznałem/am się z {links.statute}
            </Fragment>
          }
          checked={formik.values.termsAccepted}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValid={formik.touched.termsAccepted && !formik.errors.termsAccepted}
          isInvalid={
            formik.touched.termsAccepted && !!formik.errors.termsAccepted
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.termsAccepted}
        </Form.Control.Feedback>
      </Form.Group>
    </div>
  );
};
