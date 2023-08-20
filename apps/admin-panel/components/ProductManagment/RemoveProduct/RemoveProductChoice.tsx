'use client';

import style from '../ProductManagment.module.scss';

import * as formik from 'formik';

import { useReducer } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import OnRemovePopup from './RemoveProductPopup';

import { initialState, productReducer } from '../ProductReducerHook';

const RemoveProductChoice: React.FC = () => {
  const { Formik } = formik;

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <Formik
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
      {({ handleSubmit, handleReset, handleChange, values }) => (
        <Container>
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Edit product:</h1>
            <Form.Label>Pick category you want to edit product in:</Form.Label>
            <Form.Group as={Col} md="12" controlId="validationFormik01">
            <Form.Select
              onChange={(e) => {
                handleChange(e);
                if (
                  e.target.value === 'Choose category you want add product to.'
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
            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
                <Form.Label>Pick product to edit:</Form.Label>
                <Form.Select
                  onChange={handleChange}
                  value={values.productPick}
                  name="productPick"
                >
                  <option>Choose product you want to edit.</option>
                  <option>Shoe 3 file.jpg</option>
                  <option>T-shirt 7 file.png</option>
                  <option>Throuser 0 file.svg</option>
                </Form.Select>
                <OnRemovePopup
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

                {values.categoryPick !==
                  'Choose category you want add product to.' &&
                values.productPick !== 'Choose product you want to edit.' ? (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      handleSubmit();
                    }}
                    className={style.soloButton}
                  >
                    Delete Product
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    disabled
                    className={style.soloButton}
                  >
                    Delete Product
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="primary"
                type="submit"
                disabled
                className={style.soloButton}
              >
                Delete Product
              </Button>
            )}
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default RemoveProductChoice;
