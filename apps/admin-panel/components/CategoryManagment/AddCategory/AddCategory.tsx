'use client';

import style from '../CategoryManagment.module.scss';

import * as formik from 'formik';

import { useReducer } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import AddCategoryPopup from './AddCategoryPopup';

import { CategorySchema } from '../Category.schema';

import { initialState, categoryReducer } from '../CategoryReducerHook';

const AddCategory: React.FC = () => {
  const { Formik } = formik;
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  return (
    <Container>
      <h1>Add category:</h1>
      <Formik
        validationSchema={CategorySchema}
        onSubmit={(values) => {
          dispatch({
            type: 'on_submit',
            values,
          });
        }}
        initialValues={{
          categoryName: '',
          productCount: '',
          terms: true,
          file: null,
        }}
      >
        {({
          handleChange,
          handleReset,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Category name:</Form.Label>
                <Form.Control
                  type="text"
                  required
                  disabled={state.blocked}
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
              <Form.Group as={Col} md="2" controlId="validationFormik02">
                <Form.Label>Product&apos;s count:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  disabled={state.blocked}
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
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Product visibility (true by default):</Form.Label>
                <Form.Check
                  required
                  type="switch"
                  disabled={state.blocked}
                  name="terms"
                  feedback={errors.terms}
                  onChange={handleChange}
                  feedbackType="invalid"
                  id="validationFormik0"
                  label="Visible? (uncheck for invisible)"
                  defaultChecked={true}
                />
              </Form.Group>
              <Form.Group className="position-relative mb-3">
                <Form.Label>Photo:</Form.Label>
                <Form.Control
                  required
                  type="file"
                  disabled={state.blocked}
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
            <AddCategoryPopup
              show={state.modalShow}
              state={state}
              onHide={() => {
                dispatch({
                  type: 'on_hide',
                  values,
                });
              }}
              handleInPopupSubmit={() => {
                dispatch({ type: 'on_submit_popup', values });
              }}
              closeSubmitedPopup={() => {
                dispatch({ type: 'close_submited_popup', values });
                handleReset();
              }}
            />
            <div className={style.buttonsFlex}>
              <Button
                className={style.button}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Create category
              </Button>
              <Button
                variant="secondary"
                className={style.button}
                disabled={state.blocked}
                onClick={() => {
                  handleReset();
                }}
              >
                Reset form
              </Button>
            </div>
            <br />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddCategory;
