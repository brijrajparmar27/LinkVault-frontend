import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const useModalContext = () => {
  const { LinkModalState, setLinkModalState, ProcessModalState, setProcessModalState } =
    useContext(ModalContext);
  return { LinkModalState, setLinkModalState, ProcessModalState, setProcessModalState };
};
export default useModalContext;
