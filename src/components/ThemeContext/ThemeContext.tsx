import React, { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}
interface Colors {
  color: "light" | "dark";
}
interface ColorType {
  background: Colors;
  setData: React.Dispatch<React.SetStateAction<Colors>> | null;
}

export const ThemeContext = createContext<ColorType | null>(null);

const Context: React.FC<ContextProps> = (props) => {
  const [background, setData] = useState<Colors>({ color: "light" });

  return (
    <ThemeContext.Provider value={{ background, setData }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default Context;
