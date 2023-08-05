'use client';
import { FC, useState } from 'react';

import { Modal } from '@lopi-2/common';
import { SignInFormComponent } from './components/SignInFormComponent';
import { ExampleToast } from './components/ExampleToast';

import Button from 'react-bootstrap/Button';
import { useToastNotification } from './useToastNotifiaction';

const SignInForm: FC = () => {
  const { showToast, openToast, closeToast } = useToastNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal
        title="LOGOWANIE"
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      >
        <SignInFormComponent
          openToast={openToast}
          handleCloseModal={handleClose}
        />
      </Modal>
      <ExampleToast showToast={showToast} handleCloseToast={closeToast} />
    </>
  );
};

export default SignInForm;
