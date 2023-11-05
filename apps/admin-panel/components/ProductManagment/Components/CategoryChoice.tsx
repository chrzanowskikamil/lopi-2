'use client';

import { FormikValues, useFormikContext } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const CategoryChoice: React.FC = () => {
  const { handleChange, values } = useFormikContext<FormikValues>();

  return (
    <Form.Group as={Col} md="12" controlId="validationFormik02">
      <Form.Label>Pick product to edit:</Form.Label>
      <Form.Select
        required
        onChange={handleChange}
        value={values.productPick}
        name="productPick"
      >
        <option>Choose product you want to edit.</option>
        <option>Shoe 3 file.jpg</option>
        <option>T-shirt 7 file.png</option>
        <option>Throuser 0 file.svg</option>
      </Form.Select>
    </Form.Group>
  );
};
