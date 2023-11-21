import { FormikValues, useFormikContext } from 'formik';

import Button from 'react-bootstrap/Button';
import { CategoriesDetailsForm } from '../Components/CategoriesDetailsForm';
import { CategoryReducerProps } from '../CategoryReducerHook';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { OnEditPopup } from './EditCategoryPopup';
import style from '../CategoryManagment.module.scss';

const CategoryEdit: React.FC<CategoryReducerProps> = ({ categoryReducer }) => {
  const { handleSubmit, handleReset, values } =
    useFormikContext<FormikValues>();

  if (
    values.selectedValue !== '' &&
    values.selectedValue !== 'Choose category you want to edit.'
  )
    return (
      <Container>
        <br />

        <Form noValidate onSubmit={handleSubmit}>
          <CategoriesDetailsForm />
          <OnEditPopup categoryReducer={categoryReducer} />
          <div className={style.buttonsFlex}>
            <Button
              className={style.button}
              onClick={() => {
                handleSubmit();
              }}
            >
              Change category
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
      </Container>
    );
  else return;
};

export default CategoryEdit;
