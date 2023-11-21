import {
  CategoryReducerProps,
  ValuesOnDispatchProps,
} from '../CategoryReducerHook';
import { errorInError, statusInError } from '../../../utils/ErrorGuardChecking';

import Button from 'react-bootstrap/Button';
import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useFetchCategoriesQuery } from '../../../redux/reduxSlices/categories/categoriesApiSlice';
import { useFormikContext } from 'formik';

interface OnLeaveSubmitModalProps extends CategoryReducerProps {
  response: any;
}
export const OnLeaveSubmitModal: FC<OnLeaveSubmitModalProps> = ({
  categoryReducer,
  response,
}) => {
  const categories = useFetchCategoriesQuery();

  const { handleReset, values } = useFormikContext<ValuesOnDispatchProps>();

  return (
    <Modal
      show={categoryReducer.state.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        categoryReducer.closeSubmitedPopup(values);
        handleReset();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>
            {response !== undefined &&
              (response.isError ? 'Unable to send request.' : '') +
                (response.isLoading ? 'Waiting for server response.' : '') +
                (response.isSuccess ? 'Request sent.' : '')}
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {response !== undefined &&
            (response.isError ? errorInError(response) : '')}
        </p>
        <p>
          {response !== undefined &&
            (response.isError ? statusInError(response) : '') +
              (response.isLoading ? 'Loading...' : '') +
              (response.isSuccess ? 'Success!' : '')}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            categoryReducer.closeSubmitedPopup(values);
            categories?.refetch();
            handleReset();
          }}
        >
          Close the window.
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
