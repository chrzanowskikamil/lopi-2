'use client';

import { FormikValues, useFormikContext } from 'formik';

import { ChangeEvent } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const ProductChoice: React.FC = () => {
  const { handleChange, handleReset, values } =
    useFormikContext<FormikValues>();

  return (
    <Form.Group as={Col} md="12" controlId="validationFormik01">
      <Form.Label>Pick category you want add product to:</Form.Label>
      <Form.Select
        required
        name="categoryPick"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          handleChange(e);
          if (e.target.value === 'Choose category you want add product to.') {
            handleReset();
          }
        }}
        value={values.categoryPick}
      >
        <option>Choose category you want add product to.</option>
        <option>Shoes</option>
        <option>T-shirts</option>
        <option>Throusers</option>
      </Form.Select>
    </Form.Group>
  );
};
