'use client';
import styles from './FiltersModal.module.scss';
import { FC, ReactNode, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { IconWrapper } from '../Icons/IconWrapper';

interface FiltersModalProps {
  children: ReactNode;
}

export const FiltersModal: FC<FiltersModalProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <>
      <Button className={styles.filterButton} onClick={handleShow}>
        <span>
          <IconWrapper icon={<i className="bi bi-sliders" />} />
        </span>
        <span>Filtrowanie</span>
      </Button>
      <Modal show={isModalOpen} onHide={handleClose} fullscreen>
        <Modal.Header closeButton className={styles.closeButton} />
        <Modal.Title className={styles.modalTitle}>FILTROWANIE</Modal.Title>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
