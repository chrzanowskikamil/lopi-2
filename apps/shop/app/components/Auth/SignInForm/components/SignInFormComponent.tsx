'use client';

import style from '../SignInForm.module.scss';
import { FC, useState } from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import { Button as BootstrapButton, Form } from 'react-bootstrap';
import { Button } from '@lopi-2/common';
import { ExampleToast } from './ExampleToast';
import { useSignInForm } from '../useSignInForm';
import { useToastNotification } from '../useToastNotifiaction';
import { BsEye } from 'react-icons/bs';

export const SignInFormComponent: FC = () => {
  const { showToast, openToast, closeToast } = useToastNotification();
  const [showPassword, setShowPassword] = useState(false);
  const { initialValues, onSubmit, validationSchema } =
    useSignInForm(openToast);
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
          <Form noValidate onSubmit={handleSubmit} className={style.form}>
            <Form.Group controlId="email">
              <Form.Control
                type="text"
                name="email"
                placeholder="E-mail*"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <div className={style.inputWithIcon}>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Hasło*"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback
                  className="position-absolute top-100"
                  type="invalid"
                >
                  {errors.password}
                </Form.Control.Feedback>
                <BootstrapButton
                  className={style.showPasswordButton}
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <BsEye />
                </BootstrapButton>
              </div>
            </Form.Group>
            <Link className={style.forgotPassword} href="/">
              Nie pamiętasz hasła?
            </Link>
            <Button
              title="Zaloguj"
              className={style.submitButton}
              disabled={!isValid || !dirty}
              type="submit"
            />
            <Button
              title="Stwórz konto"
              type="button"
              className={style.createAccount}
              variant="outline-secondary"
            />
          </Form>
        )}
      </Formik>
      <ExampleToast showToast={showToast} handleCloseToast={closeToast} />
    </>
  );
};
