import { useContext } from "react";
import ThemeContext from "./context/themeContext";
import Main from "./components/Main";
import Attributions from "./components/Attributions/Attributions";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme.number}>
      <Main />
      <Attributions />
    </div>
  );
}

export default App;
