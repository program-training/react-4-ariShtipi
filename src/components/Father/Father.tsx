import React, { useContext, useState } from "react";
import { TextContext } from "../TextContext/TextContext";
import ChildComponent from "../Child/Child";

const FatherComponent: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) return null;
  const { setData } = context;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (setData) {
      setData({ str: inputValue });
    }
  };

  return (
    <div>
      <ChildComponent />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter new value"
      />
      <button onClick={handleButtonClick}>Change</button>
    </div>
  );
};

export default FatherComponent;
