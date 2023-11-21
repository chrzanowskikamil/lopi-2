import { FormikValues, useFormikContext } from 'formik';

import { CategoryReducerProps } from '../CategoryReducerHook';
import ModalSaveChanges from '../Components/SaveChangesModal';
import { OnLeaveSubmitModal } from '../Components/OnLeaveSubmitModal';
import { useAddCategoryMutation } from '../../../redux/reduxSlices/categories/categoriesApiSlice';

type AddCategoryProps = {
  name: string;
  description: string;
  icon: string;
  imagePath: string;
};

export const AddCategoryPopup: React.FC<CategoryReducerProps> = ({
  categoryReducer,
}) => {
  const [addCategory, responseAdd] = useAddCategoryMutation();
  const { values } = useFormikContext<FormikValues>();

  const title = 'You have just created a new category.';

  const body = (
    <>
      <span>
        Category name: &nbsp;
        {values.categoryName}.
      </span>
      <br />
      <span> Product description: &nbsp;{values.description}.</span>
      <br />
      <span>Product icon URL: &nbsp;{values.icon}.</span>
      <br />
      <span>Image URL: &nbsp;{values.imagePath}.</span>
    </>
  );

  const handleClick = () => {
    const addCategoryData: AddCategoryProps = {
      name: values.categoryName,
      description: values.description,
      icon: values.icon,
      imagePath: values.imagePath,
    };
    addCategory(addCategoryData);
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
      response={responseAdd}
    />
  );
};
