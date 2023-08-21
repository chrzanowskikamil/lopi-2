'use client';

import ModalSaveChanges from '../Components/ModalSaveChanges';
import ModalCloseWindow from '../Components/ModalCloseWindow';

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
      <span>
        Product name: From: Old product name To: {state.inputData.productName}
      </span>
      Product count:
      <span>From: Old product count To: {state.inputData.productCount}</span>
      Picture:
      <span>From: Old product picture To: {state.inputData.file}</span>
    </>
  );
  return !state.popupSubmited ? (
    <ModalSaveChanges
      handleInPopupSubmit={handleInPopupSubmit}
      others={others}
      title={title}
      body={body}
    />
  ) : (
    <ModalCloseWindow closeSubmitedPopup={closeSubmitedPopup} others={others} />
  );
};

export default OnEditPopup;
