import ModalSaveChanges from '../Components/ModalSaveChanges';
import ModalCloseWindow from '../Components/ModalCloseWindow';

import { PopupProps } from '../PopupPropsTypes';

const AddCategoryPopup: React.FC<PopupProps> = ({
  handleInPopupSubmit,
  closeSubmitedPopup,
  state,
  ...others
}) => {
  const title = 'You have just created a new category.';
  const body = (
    <>
      <p>
        Category name: &nbsp;
        {state.inputData.categoryName}.
      </p>
      <p> Product count: &nbsp;{state.inputData.productCount}.</p>
      <p>Product visibility: &nbsp;{state.inputData.terms ? 'Yes' : 'No'}.</p>
      <p>Picture: &nbsp;{state.inputData.file}.</p>
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

export default AddCategoryPopup;
