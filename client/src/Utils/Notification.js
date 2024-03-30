import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = async (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
};
export const notifyError = async (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
};
export const notifyWarning = async (msg) => {
  toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
};
export const notifyInfo = async (msg) => {
  toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });
};
