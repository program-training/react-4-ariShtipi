import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import ContextProvider from "./components/TextContext/TextContext";
import ThemeContext from "./components/ThemeContext/ThemeContext";
import SomeComponent from "./components/ThemeSwitcher/ThemeSwitcher";
function App() {
  return (
    <div>
      <ContextProvider>
        <Grandpa />
      </ContextProvider>

      <ThemeContext><SomeComponent/></ThemeContext>
    </div>
  );
}
export default App;
