'use client';

import * as formik from 'formik';

import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { OnRemovePopup } from './RemoveCategoryPopup';
import style from '../CategoryManagment.module.scss';
import useCategoryReducer from '../CategoryReducerHook';
import { useFetchCategoriesQuery } from '../../../redux/reduxSlices/categories/categoriesApiSlice';

const RemoveCategory: React.FC = () => {
  const { Formik } = formik;
  const categoryReducer = useCategoryReducer();
  const categories = useFetchCategoriesQuery();

  return (
    <Container>
      <h1>Remove category:</h1>

      <Formik
        onSubmit={(values) => categoryReducer.onSubmit(values)}
        initialValues={{
          categoryName: '',
          description: '',
          icon: '',
          imagePath: '',
          selectedCategoryUid: '',
          selectedValue: 'Choose category you want gone.',
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setFieldValue('selectedValue', e.currentTarget.value);
                const selectedCategory = categories.data?.find(
                  (category) => category.name === e.currentTarget.value
                );

                setFieldValue(
                  'selectedCategoryUid',
                  selectedCategory?.uid || ''
                );
              }}
              value={values.selectedValue}
            >
              <option value={'Choose category you want gone.'}>
                Choose category you want gone.
              </option>
              {categories.data?.map((category, i) => (
                <option key={i} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            <br />
            <OnRemovePopup categoryReducer={categoryReducer} />

            {values.selectedValue === 'Choose category you want gone.' ? (
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
                onClick={() => handleSubmit()}
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
