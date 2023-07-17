import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const useAuthContext = () => {
  const { user, setUser, authIsReady, setAuthIsReady } =
    useContext(AuthContext);

  const setLoggedUser = (userObj) => {
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const getSessionUser = () => {
    const sessionUser = localStorage.getItem("user");
    if (!user && sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
  };

  useEffect(() => {
    getSessionUser();
    setAuthIsReady(true)
  }, [user]);

  return { setLoggedUser, logout, user, setUser, authIsReady, setAuthIsReady };
};
export default useAuthContext;
