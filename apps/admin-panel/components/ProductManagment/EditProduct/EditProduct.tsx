'use client';

import style from '../ProductManagment.module.scss';

import * as formik from 'formik';

import { ChangeEvent, useReducer } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import OnEditPopup from './EditProductPopup';

import { EditProductSchema } from '../Product.schema';
import { initialState, productReducer } from '../ProductReducerHook';

const ProductEdit: React.FC = () => {
  const { Formik } = formik;

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <Container>
      <Formik
        validationSchema={EditProductSchema}
        onSubmit={async (values) => {
          dispatch({
            type: 'on_submit',
            values,
          });
        }}
        initialValues={{
          categoryPick: '',
          productPick: '',
          productName: '',
          productCount: '',
          terms: true,
          file: null,
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleReset,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Edit product:</h1>
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label>
                Pick category you want to edit product in:
              </Form.Label>
              <Form.Select
                required
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  handleChange(e);
                  if (
                    e.target.value ===
                    'Choose category you want add product to.'
                  ) {
                    handleReset();
                  }
                }}
                value={values.categoryPick}
                name="categoryPick"
              >
                <option>Choose category you want add product to.</option>
                <option>Shoes</option>
                <option>T-shirts</option>
                <option>Throusers</option>
              </Form.Select>
            </Form.Group>
            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
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
                {values.productPick !== 'Choose product you want to edit.' &&
                values.productPick !== '' ? (
                  <>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik03"
                      >
                        <Form.Label>Product name:</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          disabled={state.blocked}
                          name="productName"
                          placeholder="Product"
                          value={values.productName}
                          onChange={handleChange}
                          isInvalid={
                            !!errors.productName && !!touched.productName
                          }
                          isValid={touched.productName && !errors.productName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.productName ? 'Please pick a name.' : ''}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="2"
                        controlId="validationFormik04"
                      >
                        <Form.Label>Product&apos;s count:</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          disabled={state.blocked}
                          name="productCount"
                          placeholder="How many?"
                          value={values.productCount}
                          onChange={handleChange}
                          isInvalid={
                            !!errors.productCount && !!touched.productCount
                          }
                          isValid={touched.productCount && !errors.productCount}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.productCount ? 'Please pick a number.' : ''}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
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
                        <Form.Control.Feedback>
                          Looks good to me!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <OnEditPopup
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
                        Change product
                      </Button>
                      <Button
                        variant="secondary"
                        className={style.button}
                        disabled={state.blocked}
                        onClick={handleReset}
                      >
                        Reset form
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={style.buttonsFlex}>
                      <Button disabled className={style.button}>
                        Change product
                      </Button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className={style.buttonsFlex}>
                  <Button disabled className={style.button}>
                    Change product
                  </Button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductEdit;
