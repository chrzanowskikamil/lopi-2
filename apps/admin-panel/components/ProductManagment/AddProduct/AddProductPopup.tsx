'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

import { FormikValues, useFormikContext } from 'formik';

import { ProductReducerProps } from '../ProductReducerHook';

const AddProductPopup: React.FC<ProductReducerProps> = ({ productReducer }) => {
  const { values } = useFormikContext<FormikValues>();
  const title = 'You have just created a new product.';
  const body = (
    <>
      <span>
        Category you are adding to is: &nbsp;
        {values.categoryPick}.
      </span>
      <span>
        Product name: &nbsp;
        {values.productName}.
      </span>
      <span> Product count: &nbsp;{values.productCount}.</span>
      <span>Picture: &nbsp;{values.file}.</span>
    </>
  );

  return !productReducer.state.popupSubmited ? (
    <SaveChangesModal
      productReducer={productReducer}
      title={title}
      body={body}
    />
  ) : (
    <CloseWindowModal productReducer={productReducer} />
  );
};

export default AddProductPopup;
