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
      <p>
        Category name: <br />
        From: Old product name
        <br /> To: {state.inputData.categoryPick}
      </p>
      <p>
        Product name: <br />
        From: Old product name
        <br /> To: {state.inputData.productName}
      </p>
      <p>
        Product name: <br />
        From: Old product name
        <br /> To: {state.inputData.productName}
      </p>
      Product count: <br />
      <p>
        From: Old product count
        <br /> To: {state.inputData.productCount}
      </p>
      Picture: <br />
      <p>
        From: Old product picture <br />
        To: {state.inputData.file}
      </p>
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
