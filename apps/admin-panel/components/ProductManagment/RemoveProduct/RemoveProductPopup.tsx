import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type OnRemovePopupProps = {
  show: boolean;
  product: string;
  onHide: VoidFunction;
  reset: VoidFunction;
};

const OnRemovePopup: React.FC<OnRemovePopupProps> = ({ reset, ...others }) => {
  const [submiting, setSubmiting] = useState(false);

  const handleSubmit = () => {
    setSubmiting(true);
  };

  const closeWindow = () => {
    return (
      others.onHide(),
      setTimeout(() => {
        setSubmiting(false);
      }, 500)
    );
  };

  return !submiting ? (
    <Modal
      {...others}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5> Are you sure you want to remove {others.product} product?</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        {' '}
        <Button variant="secondary" onClick={others.onHide}>
          No
        </Button>
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal
      {...others}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop={true}
      onHide={() => {
        closeWindow();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Data send. </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Success!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeWindow}>
          Close the window.
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OnRemovePopup;
