'use client';

import { FormikValues, useFormikContext } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const CategoriesDetailsForm: React.FC = () => {
  const { handleChange, values, errors, touched } =
    useFormikContext<FormikValues>();

  return (
    <Row className="mb-3">
      <Form.Group
        as={Col}
        md="3"
        controlId="validationFormik01"
        className="mb-3"
      >
        <Form.Label>Category name:</Form.Label>
        <Form.Control
          type="text"
          required
          name="categoryName"
          placeholder="Category"
          value={values.categoryName}
          onChange={handleChange}
          isInvalid={!!errors.categoryName && !!touched.categoryName}
          isValid={touched.categoryName && !errors.categoryName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.categoryName ? 'Please pick a name.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>
          Looks good! <br />
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        as={Col}
        md="9"
        controlId="validationFormik02"
        className="mb-3"
      >
        <Form.Label>Description:</Form.Label>
        <Form.Control
          required
          type="text"
          name="description"
          placeholder="Description."
          value={values.description}
          onChange={handleChange}
          isInvalid={!!errors.description && !!touched.description}
          isValid={touched.description && !errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.description ? 'Please pick a number.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="6" className="mb-3">
        <Form.Label>Icon URL:</Form.Label>
        <Form.Control
          required
          type="text"
          name="icon"
          onChange={handleChange}
          id="validationFormik0"
          placeholder="Icon URL"
          value={values.icon}
          isInvalid={!!errors.icon && !!touched.icon}
          isValid={touched.icon && !errors.icon}
        />
      </Form.Group>
      <Form.Group as={Col} md="6" className="position-relative mb-3">
        <Form.Label>Image URL:</Form.Label>
        <Form.Control
          required
          type="text"
          id="Image URL"
          placeholder="Image URL"
          name="imagePath"
          onChange={handleChange}
          isInvalid={!!errors.imagePath && !!touched.imagePath}
          isValid={touched.imagePath && !errors.imagePath}
          value={values.imagePath || ''}
        />
        <Form.Control.Feedback type="invalid">
          {errors.imagePath ? 'Please pick a photo.' : ''}
        </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good to me!</Form.Control.Feedback>
      </Form.Group>
    </Row>
  );
};
