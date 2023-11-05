'use client';

import * as formik from 'formik';

import { Container } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

import { ButtonGroupForm } from '../Components/ButtonGroupForm';
import { ProductDetailsForm } from '../Components/ProductDetailsForm';
import { ButtonDisabled } from '../Components/ButtonDisabled';
import { ProductChoice } from '../Components/ProductChoice';

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
        {({ handleSubmit, values }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Add product:</h1>
            <ProductChoice />

            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
                <ProductDetailsForm />
                <AddProductPopup productReducer={productReducer} />
                <ButtonGroupForm>Add product</ButtonGroupForm>
              </>
            ) : (
              <ButtonDisabled>Create product</ButtonDisabled>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddProduct;
