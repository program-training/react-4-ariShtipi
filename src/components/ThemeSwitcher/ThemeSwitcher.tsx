import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext"

function SomeComponent() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { background, setData } = themeContext;

  return (
    <div>
      <div>Current Theme: {background.color}</div>
      <button onClick={() => setData({ color: "light" })}>Set Light Theme</button>
      <button onClick={() => setData({ color: "dark" })}>Set Dark Theme</button>
    </div>
  );
}

export default SomeComponent;
