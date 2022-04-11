import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { themeClass } from "../../helpers/themeHelpers";
import "./Header.css";

export default function Header() {
  const { theme, handleNumberClick, handleSwitchClick } =
    useContext(ThemeContext);
  const knobClass = themeClass(theme.number);

  return (
    <header className="header">
      <h1 className="header__name">calc</h1>
      <div className="header__container">
        <h2 className="header__title">THEME</h2>
        <nav className="switch__container">
          <h2 className="switch__number" onClick={handleNumberClick}>
            1
          </h2>
          <h2 className="switch__number" onClick={handleNumberClick}>
            2
          </h2>
          <h2 className="switch__number" onClick={handleNumberClick}>
            3
          </h2>
          <div className="switch" onClick={handleSwitchClick}>
            <div className={`switch__knob switch__knob-${knobClass}`} />
          </div>
        </nav>
      </div>
    </header>
  );
}
