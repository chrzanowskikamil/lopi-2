'use client';

import * as formik from 'formik';

import { Container } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

import { ProductDetailsForm } from '../Components/ProductDetailsForm';
import { ButtonDisabled } from '../Components/ButtonDisabled';

import OnEditPopup from './EditProductPopup';

import { EditProductSchema } from '../Product.schema';

import useProductReducer from '../ProductReducerHook';
import { ButtonGroupForm } from '../Components/ButtonGroupForm';
import { CategoryChoice } from '../Components/CategoryChoice';
import { ProductChoice } from '../Components/ProductChoice';

const ProductEdit: React.FC = () => {
  const { Formik } = formik;

  const productReducer = useProductReducer();

  return (
    <Container>
      <Formik
        validationSchema={EditProductSchema}
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
        {({ handleSubmit, values }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Edit product:</h1>
            <ProductChoice />
            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
                <CategoryChoice />
                {values.productPick !== 'Choose product you want to edit.' &&
                values.productPick !== '' ? (
                  <>
                    <ProductDetailsForm />
                    <OnEditPopup productReducer={productReducer} />
                    <ButtonGroupForm>Change product</ButtonGroupForm>
                  </>
                ) : (
                  <ButtonDisabled>Change product</ButtonDisabled>
                )}
              </>
            ) : (
              <ButtonDisabled>Change product</ButtonDisabled>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductEdit;
