import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FC } from 'react';

import { useFormikContext } from 'formik';

import {
  ProductReducerProps,
  ValuesOnDispatchProps,
} from '../ProductReducerHook';

const CloseWindowModal: FC<ProductReducerProps> = ({ productReducer }) => {
  const { handleReset, values } = useFormikContext<ValuesOnDispatchProps>();

  return (
    <Modal
      show={productReducer.state.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        productReducer.closeSubmitedPopup(values);
        handleReset();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Data sent. </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Success!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            productReducer.closeSubmitedPopup(values);
            handleReset();
          }}
        >
          Close the window.
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CloseWindowModal;
