import { createContext, useState } from "react";

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  return (
    <LinkContext.Provider value={{ links, setLinks }}>
      {children}
    </LinkContext.Provider>
  );
};
