'use client';
import { FC, useState } from 'react';

import { ModalComponent } from './components/ModalComponent';
import { SignInFormComponent } from './components/SignInFormComponent';

import Button from 'react-bootstrap/Button';

const SignInForm: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <ModalComponent
        title="LOGOWANIE"
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      >
        <SignInFormComponent />
      </ModalComponent>
    </>
  );
};

export default SignInForm;
