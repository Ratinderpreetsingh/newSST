import { toast } from 'react-toastify';

const useToast = () => {
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "bottom-right",
    });
  };

  const notifyInfo = (message) => {
    toast.info(message, {
      position: "bottom-right",
    });
  };

  const notifyWarning = (message) => {
    toast.warn(message, {
      position: "bottom-right",
    });
  };

  return {
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
  };
};

export default useToast;
