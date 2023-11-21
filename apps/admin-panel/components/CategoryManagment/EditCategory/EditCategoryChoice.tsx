'use client';

import Button from 'react-bootstrap/Button';
import { CategorySchema } from '../Category.schema';
import { Container } from 'react-bootstrap';
import EditCategory from './EditCategory';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import style from '../CategoryManagment.module.scss';
import useCategoryReducer from '../CategoryReducerHook';
import { useFetchCategoriesQuery } from '../../../redux/reduxSlices/categories/categoriesApiSlice';

const EditCategoryChoice: React.FC = () => {
  const categories = useFetchCategoriesQuery();
  const categoryReducer = useCategoryReducer();

  return (
    <>
      <Formik
        validationSchema={CategorySchema}
        onSubmit={(values) => categoryReducer.onSubmit(values)}
        initialValues={{
          categoryName: '',
          description: '',
          icon: '',
          imagePath: '',
          selectedCategoryUid: '',
          selectedValue: 'Choose category you want to edit.',
        }}
      >
        {({ values, setFieldValue }) => (
          <>
            <Container>
              <h1>Edit category:</h1>
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
                <option value={'Choose category you want to edit.'}>
                  Choose category you want to edit.
                </option>
                {categories.data?.map((category, i) => (
                  <option key={i} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
              {values.selectedValue == '' ||
              values.selectedValue == 'Choose category you want to edit.' ? (
                <Button disabled type="submit" className={style.soloButton}>
                  Change category
                </Button>
              ) : (
                ''
              )}
            </Container>
            <EditCategory categoryReducer={categoryReducer} />
          </>
        )}
      </Formik>
    </>
  );
};

export default EditCategoryChoice;
