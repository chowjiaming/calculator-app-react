import { useContext } from "react";
import ThemeContext from "../../helpers/themeContext";
import { themeClass } from "../../helpers/themeHelpers";
import "./Header.css";

export default function Header() {
  const { theme, handleNumberClick, handleSwitchClick } =
    useContext(ThemeContext);
  const knobClass = themeClass(theme.number);

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
            <div className={`knob knob${knobClass}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
