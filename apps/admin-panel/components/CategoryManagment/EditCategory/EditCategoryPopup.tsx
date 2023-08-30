import ModalSaveChanges from '../Components/ModalSaveChanges';
import ModalCloseWindow from '../Components/ModalCloseWindow';

import { PopupProps } from '../PopupPropsTypes';

const OnEditPopup: React.FC<PopupProps> = ({
  state,
  handleInPopupSubmit,
  closeSubmitedPopup,
  ...others
}) => {
  const title = 'Are you sure you want to change: ';
  const body = (
    <>
      <p>
        Category name: <br />
        From: Old category name
        <br /> To: {state.inputData.categoryName}
      </p>
      Product count: <br />
      <p>
        {' '}
        From: Old product count
        <br /> To: {state.inputData.productCount}
      </p>
      Product visibility: <br />
      <p>
        From: Old category visibility
        <br />
        To: {state.inputData.terms ? 'Yes' : 'No'}
      </p>
      Picture: <br />
      <p>
        From: Old category picture <br />
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
