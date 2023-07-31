'use client';

import { FC } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

interface ExampleToastProps {
  showToast: boolean;
  handleCloseToast: VoidFunction;
}

export const ExampleToast: FC<ExampleToastProps> = ({
  showToast,
  handleCloseToast,
}) => {
  return (
    <ToastContainer position="middle-center">
      <Toast
        bg="success"
        onClose={handleCloseToast}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Zalogowano</strong>
        </Toast.Header>
        <Toast.Body>Sprawdź swój adres e-mail</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
