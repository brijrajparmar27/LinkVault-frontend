import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const useAuthContext = () => {
  const { user, setUser } = useContext(AuthContext);
  const setLoggedUser = (userObj)=>{
    setUser(userObj);
    localStorage.setItem("user",JSON.stringify(userObj));
  }
  const clearLoggedUser = ()=>{
    localStorage.removeItem("user");
    setUser(null);
  }
  const getSessionUser = ()=>{
    const sessionUser = localStorage.getItem("user");
    setUser(sessionUser);
  }
  return { setLoggedUser, clearLoggedUser, getSessionUser };
};
export default useAuthContext;
