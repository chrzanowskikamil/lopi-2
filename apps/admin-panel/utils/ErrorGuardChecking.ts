type ErrorResponseType = {
  isError: boolean;
  error: { status: string; error: string; data: string; message: string };
};

export const statusInError = (response: ErrorResponseType) => {
  const error = response.error;
  if (response.isError) {
    if ('status' in error) {
      const errMsg = error.status;

      return 'Errror status:' + errMsg;
    } else {
      return (error as { message: string }).message;
    }
  }

  return 'No status error found';
};

export const errorInError = (response: ErrorResponseType) => {
  const error = response.error;

  if (response.isError && 'data' in error) {
    const data = JSON.parse(error.data);
    if ('data' in error) {
      const errMsg = 'error' in data ? data.error : JSON.stringify(data);

      return errMsg;
    } else {
      return (error as { message: string }).message;
    }
  } else if (response.isError && 'error' in error) {
    return error.error;
  }

  return 'No error found';
};
