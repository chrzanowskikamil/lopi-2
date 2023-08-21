'use client';

import ModalSaveChanges from '../Components/ModalSaveChanges';
import ModalCloseWindow from '../Components/ModalCloseWindow';

import { PopupProps } from '../PopupPropsTypes';

const OnRemovePopup: React.FC<PopupProps> = ({
  state,
  handleInPopupSubmit,
  closeSubmitedPopup,
  ...others
}) => {
  const title = `Remove`;
  const body = (
    <span>
      Are you sure you want to remove product: ${state.inputData.productPick}
      product from the shop?
    </span>
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

export default OnRemovePopup;
