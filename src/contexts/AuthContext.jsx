import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  return (
    <AuthContext.Provider
      value={{ user, setUser, authIsReady, setAuthIsReady }}
    >
      {children}
    </AuthContext.Provider>
  );
};
