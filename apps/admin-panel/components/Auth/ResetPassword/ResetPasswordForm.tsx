'use client';
import style from './ResetForms.module.scss';
import { FC } from 'react';
import { AppRoutes, Button, useResetPasswordForm } from '@lopi-2/common';
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';

export const ResetPasswordForm: FC = () => {
  const { initialValues, validationSchema, onSubmit } = useResetPasswordForm();

  return (
    <div className={style.container}>
      <Link href={AppRoutes.getLoginPath()}>
        <span>&#60;</span>
        powrót do logowania
      </Link>
      <h1>Resetowanie hasła</h1>
      <p>Aby kontynuować, wprowadź swoje nowe hasło.</p>
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
            <Button
              type="submit"
              disabled={!dirty || !isValid}
              title="Resetuj hasło"
            ></Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
