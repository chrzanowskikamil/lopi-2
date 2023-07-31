import style from '../SignInForm.module.scss';
import Modal from 'react-bootstrap/Modal';
import { ChildrenFC } from '@lopi-2/common';

interface IModalComponentProps {
  title: string;
  isModalOpen: boolean;
  handleClose: VoidFunction;
}

export const ModalComponent: ChildrenFC<IModalComponentProps> = ({
  title,
  children,
  isModalOpen,
  handleClose,
}) => {
  return (
    <Modal show={isModalOpen} onHide={handleClose} backdrop keyboard centered>
      <Modal.Header className={style.header}>
        <Modal.Title className={style.title}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
