'use client';

import style from './SignUpForm.module.scss';
import { FC, useState } from 'react';
import { Formik } from 'formik';
import { Button } from '@lopi-2/common';
import { Button as BootstrapButton, Form } from 'react-bootstrap';
import { useSignUpForm } from '../../useSignUpForm';
import { BsEye } from 'react-icons/bs';

export const SignUpFormComponent: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>();
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>();
  const { initialValues, validationSchema, onSubmit } = useSignUpForm();
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
            <Form.Group controlId="name">
              <Form.Control
                className={style.input}
                type="text"
                name="name"
                placeholder="Imię*"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                className={style.input}
                type="text"
                name="lastName"
                placeholder="Nazwisko"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                className={style.input}
                type="text"
                name="email"
                placeholder="Email*"
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
                  className={style.input}
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
                  className="position-absolute top-100 my-20"
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
            <Form.Group controlId="confirmPassword">
              <div className={style.inputWithIcon}>
                <Form.Control
                  className={style.input}
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Powtórz hasło*"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.confirmPassword && !errors.confirmPassword}
                  isInvalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                />
                <Form.Control.Feedback
                  className="position-absolute top-100 my-20"
                  type="invalid"
                >
                  {errors.confirmPassword}
                </Form.Control.Feedback>
                <BootstrapButton
                  className={style.showPasswordButton}
                  variant="outline-secondary"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <BsEye />
                </BootstrapButton>
              </div>
            </Form.Group>
            <Button
              title="Zarejestruj"
              className={style.submitButton}
              disabled={!isValid || !dirty}
              type="submit"
            />
            <Button
              title="Logowanie"
              type="button"
              className={style.loginButton}
              variant="outline-secondary"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
