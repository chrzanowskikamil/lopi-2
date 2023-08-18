import style from '../ProductsManagment.module.scss';

import * as formik from 'formik';

import { useState } from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import OnRemovePopup from './RemoveCategoryPopup';

const RemoveCategory: React.FC = () => {
  const { Formik } = formik;

  const [modalShow, setModalShow] = useState(false);
  const [toEdit, setToEdit] = useState('');

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
              category={toEdit}
              reset={handleReset}
            />

            {toEdit === '' || toEdit === 'Choose category you want gone.' ? (
              <Button
                variant="primary"
                type="submit"
                disabled
                className={style.soloButton}
              >
                Delete Category
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                onClick={() => setModalShow(true)}
                className={style.soloButton}
              >
                Delete Category
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RemoveCategory;
