export const createSuccess = (successcode, successMessage, data) => {
  const successObj = {
    status: successcode,
    message: successMessage,
    data: data,
  };

  return successObj;
};
