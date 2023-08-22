'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

import { PopupProps } from '../PopupPropsTypes';

const OnEditPopup: React.FC<PopupProps> = ({
  state,
  handleInPopupSubmit,
  closeSubmitedPopup,
  ...others
}) => {
  const title = `Are you sure you want to change product from category ${state.inputData.categoryPick} `;
  const body = (
    <>
      <span>Product name: </span>
      <span>From: Old product name To: {state.inputData.productName}</span>
      <span>Product count:</span>
      <span>From: Old product count To: {state.inputData.productCount}</span>
      <span> Picture:</span>
      <span>From: Old product picture To: {state.inputData.file}</span>
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

export default OnEditPopup;
