'use client';

import style from '../ProductManagment.module.scss';

import * as formik from 'formik';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import OnRemovePopup from './RemoveProductPopup';

const RemoveProductChoice: React.FC = () => {
  const { Formik } = formik;

  const [modalShow, setModalShow] = useState(false);
  const [toEdit, setToEdit] = useState('');
  const [toEditCategory, setToEditCategory] = useState('');

  return (
    <Container>
      <h1>Remove category:</h1>

      <Formik
        onSubmit={() => {
          setModalShow(true);
        }}
        initialValues={{}}
      >
        {({ handleSubmit, handleReset }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Label>Category:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setToEditCategory(e.target.value)}
            >
              <option value={undefined}>
                Choose category you want add product to.
              </option>
              <option>Shoes</option>
              <option>T-shirts</option>
              <option>Throusers</option>
            </Form.Select>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setToEdit(e.target.value)}
            >
              <option>Choose category you want gone.</option>
              <option>Shoes</option>
              <option>T-shirts</option>
              <option>Throusers</option>
            </Form.Select>
            <br />
            <OnRemovePopup
              show={modalShow}
              onHide={() => setModalShow(false)}
              product={toEdit}
              reset={handleReset}
            />

            {toEdit === '' || toEdit === 'Choose product you want gone.' ? (
              <Button
                variant="primary"
                type="submit"
                disabled
                className={style.soloButton}
              >
                Delete Product
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                onClick={() => setModalShow(true)}
                className={style.soloButton}
              >
                Delete Product
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RemoveProductChoice;
