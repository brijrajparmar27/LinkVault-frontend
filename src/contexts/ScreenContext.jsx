import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("updating");
    setIsMobile(size.width <= 700);
  }, []);

  return (
    <ScreenContext.Provider value={{ size, setSize, isMobile, setIsMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};
