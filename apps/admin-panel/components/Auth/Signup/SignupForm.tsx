'use client';

import style from './SignupForm.module.scss';
import { FC } from 'react';
import { AppRoutes, Button } from '@lopi-2/common';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { useSignupForm } from '../../../hooks/useSignupForm';

export const SignupForm: FC = () => {
  const { initialValues, onSubmit, validationSchema } = useSignupForm();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          dirty,
          errors,
          touched,
          values,
          isValid,
        }) => (
          <Form noValidate onSubmit={handleSubmit} className={style.container}>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Imię'}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              {touched.firstName && errors.firstName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Imię</Form.Label>
              )}
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Nazwisko'}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              {touched.lastName && errors.lastName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Nazwisko</Form.Label>
              )}
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Email'}
                isValid={touched.username && !errors.username}
                isInvalid={touched.username && !!errors.username}
              />
              {touched.username && errors.username ? (
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Email</Form.Label>
              )}
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Control
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Telefon'}
                isValid={touched.phoneNumber && !errors.phoneNumber}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
              />
              {touched.phoneNumber && errors.phoneNumber ? (
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Telefon</Form.Label>
              )}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Hasło'}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              {touched.password && errors.password ? (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Hasło</Form.Label>
              )}
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Control
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={isValid ? '' : 'Powtórz hasło'}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              ) : (
                <Form.Label>Powtórz hasło</Form.Label>
              )}
            </Form.Group>
            <div className={style.buttonsContainer}>
              <Button
                title="Zarejestruj"
                type="submit"
                disabled={!dirty || !isValid}
              />
              <footer className={style.footer}>
                <p>Masz już konto?</p>
                <Link href={AppRoutes.getLoginPath()}>Zaloguj się!</Link>
              </footer>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
