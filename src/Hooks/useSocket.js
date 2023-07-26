import { useRef, useState } from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";

const SOCKET_PATH =
  import.meta.env.VITE_CONFIG_TYPE == "LOCAL"
    ? import.meta.env.VITE_SOCKETS_LOCAL
    : import.meta.env.VITE_SOCKETS_REMOTE;

export const useSocket = () => {
  const toastId = useRef(null);
  const [socket, setSocket] = useState(null);

  const ConnectSocket = () => {
    console.log(SOCKET_PATH);
    const socketInstance = io(SOCKET_PATH);
    setSocket(socketInstance);
  };

  const DisconnectSocket = () => {
    socket.disconnect();
    setSocket(null);
  };

  const showNotification = (msg) => {
    toastId.current = toast(msg, {
      autoClose: false,
      type: "info",
      icon: true,
    });
  };

  const showMutation = (msg) => {
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.DEFAULT,
      autoClose: false,
    });
  };

  const showError = (msg) => {
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.ERROR,
      autoClose: true,
    });
  };

  const showSuccess = (msg) => {
    toast.update(toastId.current, {
      render: msg,
      type: toast.TYPE.SUCCESS,
      autoClose: true,
    });
  };

  const HandleEmmit = ({ type, message }) => {
    switch (type) {
      case "SHOW":
        showNotification(message);
        break;
      case "MUTATE":
        showMutation(message);
        break;
      case "ERROR":
        showError(message);
        break;
      case "SUCCESS":
        showSuccess(message);
        break;
      default:
        console.log("Unknown type:", type);
    }
  };
  return { ConnectSocket, DisconnectSocket, HandleEmmit, socket };
};
