'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

import { PopupProps } from '../PopupPropsTypes';

const AddProductPopup: React.FC<PopupProps> = ({
  handleInPopupSubmit,
  closeSubmitedPopup,
  state,
  ...others
}) => {
  const title = 'You have just created a new product.';
  const body = (
    <>
      <span>
        Category you are adding to is: &nbsp;
        {state.inputData.categoryPick}.
      </span>
      <span>
        Product name: &nbsp;
        {state.inputData.productName}.
      </span>
      <span> Product count: &nbsp;{state.inputData.productCount}.</span>
      <span>Picture: &nbsp;{state.inputData.file}.</span>
    </>
  );

  return !state.popupSubmited ? (
    <SaveChangesModal
      handleInPopupSubmit={handleInPopupSubmit}
      others={others}
      title={title}
      body={body}
    />
  ) : (
    <CloseWindowModal closeSubmitedPopup={closeSubmitedPopup} others={others} />
  );
};

export default AddProductPopup;
