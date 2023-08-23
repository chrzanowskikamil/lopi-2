'use client';

import * as formik from 'formik';

import { Container } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

import { ButtonGroupForm } from '../Components/ButtonGroupForm';
import { ButtonDisabled } from '../Components/ButtonDisabled';

import OnRemovePopup from './RemoveProductPopup';

import { RemoveProductSchema } from '../Product.schema';

import useProductReducer from '../ProductReducerHook';

import { ProductChoice } from '../Components/ProductChoice';
import { CategoryChoice } from '../Components/CategoryChoice';

const RemoveProductChoice: React.FC = () => {
  const { Formik } = formik;

  const productReducer = useProductReducer();

  return (
    <Formik
      validationSchema={RemoveProductSchema}
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
        <Container>
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Remove product:</h1>

            <ProductChoice />
            {values.categoryPick !==
              'Choose category you want add product to.' &&
            values.categoryPick !== '' ? (
              <>
                <CategoryChoice />
                <OnRemovePopup productReducer={productReducer} />

                {values.productPick !== '' &&
                values.productPick !== 'Choose product you want to edit.' ? (
                  <ButtonGroupForm>Remove product</ButtonGroupForm>
                ) : (
                  <ButtonDisabled>Delete product</ButtonDisabled>
                )}
              </>
            ) : (
              <ButtonDisabled>Delete product</ButtonDisabled>
            )}
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default RemoveProductChoice;
