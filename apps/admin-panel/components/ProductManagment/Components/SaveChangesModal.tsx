import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import style from '../ProductManagment.module.scss';

import React from 'react';
import { FC } from 'react';

import { useFormikContext } from 'formik';

import {
  ProductReducerProps,
  ValuesOnDispatchProps,
} from '../ProductReducerHook';

interface SaveChangesModalProps extends ProductReducerProps {
  title: string;
  body: React.JSX.Element;
}

const SaveChangesModal: FC<SaveChangesModalProps> = ({
  productReducer,
  title,
  body,
}) => {
  const { values } = useFormikContext<ValuesOnDispatchProps>();

  return (
    <Modal
      show={productReducer.state.modalShow}
      onHide={() => productReducer.onHide(values)}
      size="lg"
      centered
      className={style.saveChangesModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4>{title}</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => productReducer.onHide(values)}
        >
          Take a step back
        </Button>
        <Button
          variant="primary"
          onClick={() => productReducer.onSubmitPopup(values)}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaveChangesModal;
