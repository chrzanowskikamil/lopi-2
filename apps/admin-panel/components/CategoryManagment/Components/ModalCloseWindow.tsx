import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FC } from 'react';

type CloseWindowProps = {
  closeSubmitedPopup: VoidFunction;

  others: { show: boolean; onHide: VoidFunction };
};

const CloseWindow: FC<CloseWindowProps> = ({ closeSubmitedPopup, others }) => {
  return (
    <Modal
      {...others}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        closeSubmitedPopup();
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
        <Button variant="primary" onClick={closeSubmitedPopup}>
          Close the window.
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CloseWindow;
