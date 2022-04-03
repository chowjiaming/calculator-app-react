import { useContext } from "react";
import ThemeContext from "../../helpers/ThemeContext";
import "./Header.css";

export default function Header() {
  const { theme, handleNumberClick, handleSwitchClick } =
    useContext(ThemeContext);
  console.log(theme);
  return (
    <header>
      <h1 className="app-name">calc</h1>
      <div className="theme-toggle-container">
        <h2 className="theme-title">THEME</h2>
        <div className="switch-container">
          <h2 className="theme-number" onClick={handleNumberClick}>
            1
          </h2>
          <h2 className="theme-number" onClick={handleNumberClick}>
            2
          </h2>
          <h2 className="theme-number" onClick={handleNumberClick}>
            3
          </h2>
          <div className="switch" onClick={handleSwitchClick}>
            <div className="knob" />
          </div>
        </div>
      </div>
    </header>
  );
}
