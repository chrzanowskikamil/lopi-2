'use client';

import SaveChangesModal from '../Components/SaveChangesModal';
import CloseWindowModal from '../Components/CloseWindowModal';

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
      Are you sure you want to remove product: {state.inputData.productPick}
      product from the shop?
    </span>
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

export default OnRemovePopup;
