'use client';
import style from './ResetForms.module.scss';
import { AppRoutes, Button, useResetPasswordInitialForm } from '@lopi-2/common';
import { Formik } from 'formik';
import Link from 'next/link';
import { FC } from 'react';
import { Form } from 'react-bootstrap';

export const InitialForm: FC = () => {
  const { initialValues, onSubmit, validationSchema } =
    useResetPasswordInitialForm();

  return (
    <div className={style.container}>
      <Link href={AppRoutes.getLoginPath()}>
        <span>&#60;</span>
        powrót do logowania
      </Link>
      <h1>Resetowanie hasła</h1>
      <p>Zapomniane hasło? Spokojnie, mamy Cię! Wprowadź swój adres email.</p>
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
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
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
