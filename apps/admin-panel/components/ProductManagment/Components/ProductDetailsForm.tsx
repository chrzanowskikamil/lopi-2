'use client';

import { FormikValues, useFormikContext } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const ProductDetailsForm: React.FC = () => {
  const { handleChange, values, errors, touched } =
    useFormikContext<FormikValues>();

  return (
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationFormik02">
        <Form.Label>Product name:</Form.Label>
        <Form.Control
          type="text"
          required
          name="productName"
          placeholder="Product"
          value={values.productName}
          onChange={handleChange}
          isInvalid={!!errors.productName && !!touched.productName}
          isValid={touched.productName && !errors.productName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.productName ? 'Please pick a name.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="2" controlId="validationFormik03">
        <Form.Label>Product&apos;s count:</Form.Label>
        <Form.Control
          required
          type="number"
          name="productCount"
          placeholder="How many?"
          value={values.productCount}
          onChange={handleChange}
          isInvalid={!!errors.productCount && !!touched.productCount}
          isValid={touched.productCount && !errors.productCount}
        />
        <Form.Control.Feedback type="invalid">
          {errors.productCount ? 'Please pick a number.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="position-relative mb-3">
        <Form.Label>Photo:</Form.Label>
        <Form.Control
          required
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
          isInvalid={!!errors.file && !!touched.file}
          isValid={touched.file && !errors.file}
          value={values.file || ''}
        />
        <Form.Control.Feedback type="invalid">
          {errors.file ? 'Please pick a photo.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good to me!</Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
};
