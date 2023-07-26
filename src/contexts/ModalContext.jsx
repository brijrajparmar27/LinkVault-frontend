import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [LinkModalState, setLinkModalState] = useState(false);
  return (
    <ModalContext.Provider
      value={{ LinkModalState, setLinkModalState}}
    >
      {children}
    </ModalContext.Provider>
  );
};
