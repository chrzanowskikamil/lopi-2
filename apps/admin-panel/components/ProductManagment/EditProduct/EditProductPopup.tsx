'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

import { FormikValues, useFormikContext } from 'formik';

import { ProductReducerProps } from '../ProductReducerHook';

const OnEditPopup: React.FC<ProductReducerProps> = ({ productReducer }) => {
  const { values } = useFormikContext<FormikValues>();
  const title = `Are you sure you want to change product from category ${values.categoryPick} `;
  const body = (
    <>
      <span>Product name: </span>
      <span>From: Old product name To: {values.productName}</span>
      <span>Product count:</span>
      <span>From: Old product count To: {values.productCount}</span>
      <span> Picture:</span>
      <span>From: Old product picture To: {values.file}</span>
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

export default OnEditPopup;
