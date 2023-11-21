import { FormikValues, useFormikContext } from 'formik';

import { CategoryReducerProps } from '../CategoryReducerHook';
import ModalSaveChanges from '../Components/SaveChangesModal';
import { OnLeaveSubmitModal } from '../Components/OnLeaveSubmitModal';
import { useRemoveCategoryMutation } from '../../../redux/reduxSlices/categories/categoriesApiSlice';

export const OnRemovePopup: React.FC<CategoryReducerProps> = ({
  categoryReducer,
}) => {
  const [removeCategory, responseRemove] = useRemoveCategoryMutation();
  const { values } = useFormikContext<FormikValues>();

  const title = `Remove.`;

  const body = (
    <p>Are you sure you want to remove {values.selectedValue} category?</p>
  );

  const handleClick = () => {
    removeCategory(values.selectedCategoryUid);
  };

  return !categoryReducer.state.popupSubmited ? (
    <ModalSaveChanges
      handleClick={handleClick}
      categoryReducer={categoryReducer}
      title={title}
      body={body}
    />
  ) : (
    <OnLeaveSubmitModal
      categoryReducer={categoryReducer}
      response={responseRemove}
    />
  );
};
