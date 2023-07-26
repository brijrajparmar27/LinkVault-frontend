import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const useModalContext = () => {
  const { LinkModalState, setLinkModalState } = useContext(ModalContext);
  return { LinkModalState, setLinkModalState };
};
export default useModalContext;
