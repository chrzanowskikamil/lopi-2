import style from '../SignInForm.module.scss';
import { FC, ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';

interface ModalComponentProps {
  title: string;
  children: ReactNode;
  isModalOpen: boolean;
  handleClose: () => void;
}

export const ModalComponent: FC<ModalComponentProps> = ({
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
