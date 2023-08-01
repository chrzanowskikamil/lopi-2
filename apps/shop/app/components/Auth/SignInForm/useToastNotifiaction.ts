import { useCallback, useState } from 'react';

export const useToastNotification = () => {
  const [showToast, setShowToast] = useState(false);

  const openToast = useCallback(() => {
    setShowToast(true);
  }, []);

  const closeToast = useCallback(() => {
    setShowToast(false);
  }, []);

  return { showToast, openToast, closeToast };
};
