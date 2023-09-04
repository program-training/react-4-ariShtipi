import React, { createContext, useState } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}
interface Data {
  str: string;
}
interface ContextType {
  stringi: Data;
  setData: React.Dispatch<React.SetStateAction<Data>> | null;
}

export const TextContext = createContext<ContextType | null>(null);

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [stringi, setData] = useState<Data>({ str: "hello world" });

  return (
    <TextContext.Provider value={{ stringi, setData }}>
      {props.children}
    </TextContext.Provider>
  );
};
export default ContextProvider;
