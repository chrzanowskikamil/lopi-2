import {
  CategoryReducerProps,
  ValuesOnDispatchProps,
} from '../CategoryReducerHook';

import Button from 'react-bootstrap/Button';
import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useFormikContext } from 'formik';

interface SaveChangesModalProps extends CategoryReducerProps {
  title: string;
  body: JSX.Element;
  handleClick: VoidFunction;
}

const SaveChanges: FC<SaveChangesModalProps> = ({
  categoryReducer,
  title,
  body,
  handleClick,
}) => {
  const { values } = useFormikContext<ValuesOnDispatchProps>();

  return (
    <Modal
      show={categoryReducer.state.modalShow}
      onHide={() => categoryReducer.onHide(values)}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => categoryReducer.onHide(values)}
        >
          Take a step back
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            categoryReducer.onSubmitPopup(values);
            handleClick();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaveChanges;
