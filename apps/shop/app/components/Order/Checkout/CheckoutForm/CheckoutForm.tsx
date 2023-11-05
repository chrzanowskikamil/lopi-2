'use client';
import style from './CheckoutForm.module.scss';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { FormikProps } from 'formik';
import { CheckoutFormValues } from './useCheckoutForm';
import { DeliveryMethodResponse } from '../../../../../types/DeliveryMethodResponse';
import { useCart } from '../../../../../app/contexts/CartContext';

interface CheckoutFormProps {
  formRef: FormikProps<CheckoutFormValues>;
  deliveryMethod: DeliveryMethodResponse;
}

export const CheckoutForm: FC<CheckoutFormProps> = ({
  formRef,
  deliveryMethod,
}) => {
  const { handleDeliveryPrice } = useCart();

  const links = {
    privacyPolicy: <Link href="/privacy-policy">Politykę Prywatności</Link>,
    rodo: <Link href="/rodo">RODO</Link>,
    statute: <Link href="/statute">Regulaminem</Link>,
  };

  const deliveryMethodOptions = deliveryMethod.map((method) => {
    return (
      <option key={method.name} value={method.name}>
        {method.name} - {method.cost.toFixed(2)} zł
      </option>
    );
  });

  return (
    <div className={style.checkoutFormContainer}>
      <h2>Dane do wysyłki</h2>
      <Form.Group controlId="customerType">
        <Form.Select
          aria-label="choose customer type"
          placeholder={'Wybierz typ klienta'}
          value={formRef.values.customerType}
          onChange={formRef.handleChange}
          isValid={formRef.touched.customerType && !formRef.errors.customerType}
          isInvalid={
            formRef.touched.customerType && !!formRef.errors.customerType
          }
        >
          <option>Typ klienta</option>
          <option value="INDIVIDUAL">Osoba prywatna</option>
          <option value="COMPANY">Firma</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formRef.errors.customerType}
        </Form.Control.Feedback>
      </Form.Group>
      {formRef.values.customerType === 'COMPANY' && (
        <>
          <Form.Group controlId="companyName">
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Nazwa firmy"
              value={formRef.values.companyName}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.companyName && !formRef.errors.companyName
              }
              isInvalid={
                formRef.touched.companyName && !!formRef.errors.companyName
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.companyName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="nip">
            <Form.Control
              type="text"
              name="nip"
              placeholder="NIP"
              value={formRef.values.nip}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={formRef.touched.nip && !formRef.errors.nip}
              isInvalid={formRef.touched.nip && !!formRef.errors.nip}
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.nip}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
      <Form.Group controlId="salutation">
        <Form.Select
          aria-label="choose salutation"
          value={formRef.values.salutation}
          onChange={formRef.handleChange}
          isValid={formRef.touched.salutation && !formRef.errors.salutation}
          isInvalid={formRef.touched.salutation && !!formRef.errors.salutation}
        >
          <option>Tytuł</option>
          <option value="MR">Pan</option>
          <option value="MRS">Pani</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formRef.errors.salutation}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Control
          type="text"
          name="firstName"
          placeholder="Imię"
          value={formRef.values.firstName}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={formRef.touched.firstName && !formRef.errors.firstName}
          isInvalid={formRef.touched.firstName && !!formRef.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Nazwisko"
          value={formRef.values.lastName}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={formRef.touched.lastName && !formRef.errors.lastName}
          isInvalid={formRef.touched.lastName && !!formRef.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          name="email"
          placeholder="E-mail"
          value={formRef.values.email}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={formRef.touched.email && !formRef.errors.email}
          isInvalid={formRef.touched.email && !!formRef.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="deliveryMethodName">
        <Form.Select
          aria-label="choose delivery method"
          value={formRef.values.deliveryMethodName}
          onChange={(e) => {
            formRef.handleChange(e);
            handleDeliveryPrice(e.target.value);
          }}
        >
          <option>Rodzaj dostawy</option>
          {deliveryMethodOptions}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="shippingAddressStreet">
        <Form.Control
          type="text"
          name="shippingAddress.street"
          placeholder="Ulica"
          value={formRef.values.shippingAddress.street}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.street &&
            !formRef.errors.shippingAddress?.street
          }
          isInvalid={
            formRef.touched.shippingAddress?.street &&
            !!formRef.errors.shippingAddress?.street
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.street}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressHouseNumber">
        <Form.Control
          type="text"
          name="shippingAddress.houseNumber"
          placeholder="Numer domu"
          value={formRef.values.shippingAddress.houseNumber}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.houseNumber &&
            !formRef.errors.shippingAddress?.houseNumber
          }
          isInvalid={
            formRef.touched.shippingAddress?.houseNumber &&
            !!formRef.errors.shippingAddress?.houseNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.houseNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressApartmentNumber">
        <Form.Control
          type="text"
          name="shippingAddress.apartmentNumber"
          placeholder="Numer mieszkania"
          value={formRef.values.shippingAddress.apartmentNumber}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.apartmentNumber &&
            !formRef.errors.shippingAddress?.apartmentNumber
          }
          isInvalid={
            formRef.touched.shippingAddress?.apartmentNumber &&
            !!formRef.errors.shippingAddress?.apartmentNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.apartmentNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressPostalCode">
        <Form.Control
          type="text"
          name="shippingAddress.postalCode"
          placeholder="Kod pocztowy"
          value={formRef.values.shippingAddress.postalCode}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.postalCode &&
            !formRef.errors.shippingAddress?.postalCode
          }
          isInvalid={
            formRef.touched.shippingAddress?.postalCode &&
            !!formRef.errors.shippingAddress?.postalCode
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.postalCode}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressCity">
        <Form.Control
          type="text"
          name="shippingAddress.city"
          placeholder="Miasto"
          value={formRef.values.shippingAddress.city}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.city &&
            !formRef.errors.shippingAddress?.city
          }
          isInvalid={
            formRef.touched.shippingAddress?.city &&
            !!formRef.errors.shippingAddress?.city
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.city}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressCountry">
        <Form.Control
          type="text"
          name="shippingAddress.country"
          placeholder="Kraj"
          value={formRef.values.shippingAddress.country}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.country &&
            !formRef.errors.shippingAddress?.country
          }
          isInvalid={
            formRef.touched.shippingAddress?.country &&
            !!formRef.errors.shippingAddress?.country
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.country}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="shippingAddressPhoneNumber">
        <Form.Control
          type="text"
          name="shippingAddress.phoneNumber"
          placeholder="Telefon"
          value={formRef.values.shippingAddress.phoneNumber}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.shippingAddress?.phoneNumber &&
            !formRef.errors.shippingAddress?.phoneNumber
          }
          isInvalid={
            formRef.touched.shippingAddress?.phoneNumber &&
            !!formRef.errors.shippingAddress?.phoneNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.shippingAddress?.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className={style.formCheck}>
        <Form.Check
          name="useSameAddress"
          label="Adres na fakturze będzie taki sam jak adres dostawy"
          checked={formRef.values.useSameAddress}
          onChange={formRef.handleChange}
        />
      </Form.Group>
      {!formRef.values.useSameAddress && (
        <>
          <Form.Group controlId="billingAddressStreet">
            <Form.Control
              type="text"
              name="billingAddress.street"
              placeholder="Ulica"
              value={formRef.values.billingAddress.street}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.street &&
                !formRef.errors.billingAddress?.street
              }
              isInvalid={
                formRef.touched.billingAddress?.street &&
                !!formRef.errors.billingAddress?.street
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.street}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressHouseNumber">
            <Form.Control
              type="text"
              name="billingAddress.houseNumber"
              placeholder="Numer domu"
              value={formRef.values.billingAddress.houseNumber}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.houseNumber &&
                !formRef.errors.billingAddress?.houseNumber
              }
              isInvalid={
                formRef.touched.billingAddress?.houseNumber &&
                !!formRef.errors.billingAddress?.houseNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.houseNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressApartmentNumber">
            <Form.Control
              type="text"
              name="billingAddress.apartmentNumber"
              placeholder="Numer mieszkania"
              value={formRef.values.billingAddress.apartmentNumber}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.apartmentNumber &&
                !formRef.errors.billingAddress?.apartmentNumber
              }
              isInvalid={
                formRef.touched.billingAddress?.apartmentNumber &&
                !!formRef.errors.billingAddress?.apartmentNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.apartmentNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressPostalCode">
            <Form.Control
              type="text"
              name="billingAddress.postalCode"
              placeholder="Kod pocztowy"
              value={formRef.values.billingAddress.postalCode}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.postalCode &&
                !formRef.errors.billingAddress?.postalCode
              }
              isInvalid={
                formRef.touched.billingAddress?.postalCode &&
                !!formRef.errors.billingAddress?.postalCode
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.postalCode}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressCity">
            <Form.Control
              type="text"
              name="billingAddress.city"
              placeholder="Miasto"
              value={formRef.values.billingAddress.city}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.city &&
                !formRef.errors.billingAddress?.city
              }
              isInvalid={
                formRef.touched.billingAddress?.city &&
                !!formRef.errors.billingAddress?.city
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressCountry">
            <Form.Control
              type="text"
              name="billingAddress.country"
              placeholder="Kraj"
              value={formRef.values.billingAddress.country}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.country &&
                !formRef.errors.billingAddress?.country
              }
              isInvalid={
                formRef.touched.billingAddress?.country &&
                !!formRef.errors.billingAddress?.country
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.country}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="billingAddressPhoneNumber">
            <Form.Control
              type="text"
              name="billingAddress.phoneNumber"
              placeholder="Telefon"
              value={formRef.values.billingAddress.phoneNumber}
              onBlur={formRef.handleBlur}
              onChange={formRef.handleChange}
              isValid={
                formRef.touched.billingAddress?.phoneNumber &&
                !formRef.errors.billingAddress?.phoneNumber
              }
              isInvalid={
                formRef.touched.billingAddress?.phoneNumber &&
                !!formRef.errors.billingAddress?.phoneNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formRef.errors.billingAddress?.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
      <Form.Group className={style.formCheck} controlId="termsAccepted">
        <Form.Check
          name="termsAccepted"
          label={
            <Fragment>
              *Zgadzam się na {links.privacyPolicy} i wyrażam zgodę na
              przetwarzanie danych osobowych zgodnie z {links.rodo} oraz
              zapoznałem/am się z {links.statute}
            </Fragment>
          }
          checked={formRef.values.termsAccepted}
          onBlur={formRef.handleBlur}
          onChange={formRef.handleChange}
          isValid={
            formRef.touched.termsAccepted && !formRef.errors.termsAccepted
          }
          isInvalid={
            formRef.touched.termsAccepted && !!formRef.errors.termsAccepted
          }
        />
        <Form.Control.Feedback type="invalid">
          {formRef.errors.termsAccepted}
        </Form.Control.Feedback>
      </Form.Group>
    </div>
  );
};
