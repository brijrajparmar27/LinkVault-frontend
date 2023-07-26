import { ToastContainer } from "react-toastify";

const ToastContainerParent = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  );
};

export default ToastContainerParent;
