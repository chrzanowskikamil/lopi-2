'use client';
import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const TOAST_STYLES = {
  SUCCESS: '#28a745',
  WARNING: '#dc3545',
  MARGIN: '1rem',
  DELAY: 3000,
};

interface ToastContextProps {
  state: ToastState;
  showToast: (message: string, type: 'success' | 'warning') => void;
}

type ToastState = {
  message: string;
  type: 'success' | 'warning';
  isVisible: boolean;
};

type ToastAction =
  | {
      type: 'SHOW_TOAST';
      payload: { message: string; type: 'success' | 'warning' };
    }
  | { type: 'HIDE_TOAST' };

const ToastContext = createContext<ToastContextProps | null>(null);

export const toastReducer = (
  state: ToastState,
  action: ToastAction
): ToastState => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        isVisible: true,
      };
    case 'HIDE_TOAST':
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showToast = (message: string, type: 'success' | 'warning') => {
    dispatch({ type: 'SHOW_TOAST', payload: { message, type } });
  };

  const hideToast = () => {
    dispatch({ type: 'HIDE_TOAST' });
  };

  return (
    <ToastContext.Provider value={{ state, showToast }}>
      {children}
      <ToastContainer position="top-center" className="position-fixed">
        <Toast
          onClose={hideToast}
          show={state.isVisible}
          delay={TOAST_STYLES.DELAY}
          autohide
          style={{
            marginTop: TOAST_STYLES.MARGIN,
            backgroundColor:
              state.type === 'success'
                ? TOAST_STYLES.SUCCESS
                : TOAST_STYLES.WARNING,
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">{state.type.toUpperCase()}</strong>
          </Toast.Header>
          <Toast.Body>{state.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { showToast } = context;

  return { showToast };
};
