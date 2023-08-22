import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import style from '../ProductManagment.module.scss';

import React from 'react';
import { FC } from 'react';
type SaveChangesModalProps = {
  title: string;
  body: React.JSX.Element;
  handleInPopupSubmit: VoidFunction;
  others: { show: boolean; onHide: VoidFunction };
};

const SaveChangesModal: FC<SaveChangesModalProps> = ({
  others,
  handleInPopupSubmit,
  title,
  body,
}) => {
  return (
    <Modal
      {...others}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={style.saveChangesModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={others.onHide}>
          Take a step back
        </Button>
        <Button variant="primary" onClick={handleInPopupSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaveChangesModal;
