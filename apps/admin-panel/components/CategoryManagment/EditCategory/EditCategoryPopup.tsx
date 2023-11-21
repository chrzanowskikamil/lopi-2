import { FormikValues, useFormikContext } from 'formik';

import { CategoryReducerProps } from '../CategoryReducerHook';
import ModalSaveChanges from '../Components/SaveChangesModal';
import { OnLeaveSubmitModal } from '../Components/OnLeaveSubmitModal';
import { useEditCategoryMutation } from '../../../redux/reduxSlices/categories/categoriesApiSlice';

type EditCategoryProps = {
  name: string;
  description: string;
  icon: string;
  imagePath: string;
  previousUid: string;
};

export const OnEditPopup: React.FC<CategoryReducerProps> = ({
  categoryReducer,
}) => {
  const [editCategory, responseEdit] = useEditCategoryMutation();
  const { values } = useFormikContext<FormikValues>();

  const title = `Are you sure you want change ${values.selectedValue} to: `;

  const body = (
    <>
      <span>Category name to: {values.categoryName}</span>
      <br />
      <span>Product count to: {values.description}</span>
      <br />
      <span>Product visibility to:{values.icon}</span>
      <br />
      <span>Picture to:{values.imagePath}</span>
    </>
  );

  const handleClick = () => {
    const editCategoryData: EditCategoryProps = {
      previousUid: values.selectedCategoryUid,
      name: values.categoryName,
      description: values.description,
      icon: values.icon,
      imagePath: values.imagePath,
    };
    editCategory(editCategoryData);
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
      response={responseEdit}
    />
  );
};
