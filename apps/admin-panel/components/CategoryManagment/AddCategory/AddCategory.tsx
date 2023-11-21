'use client';

import * as formik from 'formik';

import { AddCategoryPopup } from './AddCategoryPopup';
import Button from 'react-bootstrap/Button';
import { CategoriesDetailsForm } from '../Components/CategoriesDetailsForm';
import { CategorySchema } from '../Category.schema';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import style from '../CategoryManagment.module.scss';
import useCategoryReducer from '../CategoryReducerHook';

const AddCategory: React.FC = () => {
  const { Formik } = formik;

  const categoryReducer = useCategoryReducer();

  return (
    <Container>
      <h1>Add category:</h1>
      <Formik
        validationSchema={CategorySchema}
        onSubmit={(values) => categoryReducer.onSubmit(values)}
        initialValues={{
          categoryName: '',
          description: '',
          icon: '',
          imagePath: '',
          selectedCategoryUid: '',
          selectedValue: '',
        }}
      >
        {({ handleReset, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <CategoriesDetailsForm />
            <AddCategoryPopup categoryReducer={categoryReducer} />

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
