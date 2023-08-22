'use client';

import style from '../ProductManagment.module.scss';

import * as formik from 'formik';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import AddProductPopup from './AddProductPopup';

import { ProductSchema } from '../Product.schema';

import useProductReducer from '../ProductReducerHook';

const AddProduct: React.FC = () => {
  const { Formik } = formik;

  const productReducer = useProductReducer();

  return (
    <Container>
      <Formik
        validationSchema={ProductSchema}
        onSubmit={(values) => productReducer.onSubmit(values)}
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
          handleReset,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Add product:</h1>
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label>Pick category you want add product to:</Form.Label>
              <Form.Select
                required
                name="categoryPick"
                onChange={(e) => {
                  handleChange(e);
                  if (
                    e.target.value ===
                    'Choose category you want add product to.'
                  ) {
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
            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Product name:</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      disabled={productReducer.state.blocked}
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
                      disabled={productReducer.state.blocked}
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="position-relative mb-3">
                    <Form.Label>Photo:</Form.Label>
                    <Form.Control
                      required
                      type="file"
                      disabled={productReducer.state.blocked}
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
                </Row>{' '}
                <AddProductPopup
                  show={productReducer.state.modalShow}
                  state={productReducer.state}
                  onHide={() => productReducer.onHide(values)}
                  handleInPopupSubmit={() =>
                    productReducer.onSubmitPopup(values)
                  }
                  closeSubmitedPopup={() => {
                    productReducer.closeSubmitedPopup(values);
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
                    Create product
                  </Button>
                  <Button
                    variant="secondary"
                    className={style.button}
                    disabled={productReducer.state.blocked}
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
                    Create product
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

export default AddProduct;
