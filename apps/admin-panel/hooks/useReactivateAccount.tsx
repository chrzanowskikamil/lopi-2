import { reactivateUser, useToast } from '@lopi-2/common';

export const useReactivateAccount = () => {
  const { showToast } = useToast();
  const reactiveAccount = async (
    encodedUsername: string,
    tokenValue: string
  ) => {
    try {
      const response = await reactivateUser(encodedUsername, tokenValue);
      showToast(response.message, 'success');
    } catch (error) {
      if (error instanceof Error) {
        showToast(error.message, 'warning');
        throw new Error(error.message);
      } else {
        showToast('Wystąpił nieoczekiwany błąd', 'warning');
        throw error;
      }
    }
  };

  return { reactiveAccount };
};
