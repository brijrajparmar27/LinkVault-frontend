import { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";

const useScreenContext = () => {
  const { size, setSize, isMobile, setIsMobile } = useContext(ScreenContext);
  return { size, isMobile, setSize, setIsMobile };
};

export default useScreenContext;
