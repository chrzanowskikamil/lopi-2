'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

import { FormikValues, useFormikContext } from 'formik';

import { ProductReducerProps } from '../ProductReducerHook';

const OnRemovePopup: React.FC<ProductReducerProps> = ({ productReducer }) => {
  const { values } = useFormikContext<FormikValues>();
  const title = `Remove`;
  const body = (
    <span>
      Are you sure you want to remove product: {values.productPick}
      product from the shop?
    </span>
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

export default OnRemovePopup;
