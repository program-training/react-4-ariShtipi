import React, { useContext } from "react";
import { TextContext } from "../TextContext/TextContext";

const ChildComponent: React.FC = () => {
  const context = useContext(TextContext);
  if (!context) return null;
  const { stringi } = context;
  const { str } = stringi;
  return (
    <div>
      <h4>Child</h4>
      <div> print data: {str} </div>      
    </div>
    
  );
};

export default ChildComponent;
