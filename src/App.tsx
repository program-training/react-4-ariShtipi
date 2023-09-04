import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import ContextProvider from "./components/TextContext/TextContext";
import FatherComponent from "./components/Father/Father";
function App() {
  return (
    <ContextProvider>
      <Grandpa />
    </ContextProvider>
  );
}
export default App;
