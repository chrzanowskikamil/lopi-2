'use client';

import style from './SingninForm.module.scss';
import { FC } from 'react';
import { AppRoutes, Button, useSignin } from '@lopi-2/common';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import Link from 'next/link';

export const SigninForm: FC = () => {
  const { initialValues, validationSchema, onSubmit } = useSignin();

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
              <div className={style.passwordLabelContainer}>
                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : (
                  <Form.Label>Hasło</Form.Label>
                )}
                <Link href={AppRoutes.getInitResetPasswordPath()}>
                  Nie pamiętasz hasła?
                </Link>
              </div>
            </Form.Group>
            <div className={style.buttonsContainer}>
              <Button
                title="Zaloguj"
                type="submit"
                disabled={!dirty || !isValid}
              />
              <footer className={style.footer}>
                <p>Masz już konto?</p>
                <Link href={AppRoutes.getRegisterPath()}>
                  Zarejestruj się teraz!
                </Link>
              </footer>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
