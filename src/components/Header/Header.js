import { useContext } from "react";
import ThemeContext from "../../helpers/themeContext";
import "./Header.css";

export default function Header() {
  const { theme, handleNumberClick, handleSwitchClick } =
    useContext(ThemeContext);
  let knobTheme;
  switch (theme.number) {
    case 1:
      knobTheme = "theme-one";
      break;
    case 2:
      knobTheme = "theme-two";
      break;
    case 3:
      knobTheme = "theme-three";
      break;
    default:
      knobTheme = "theme-one";
      break;
  }

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
            <div className={`knob ${knobTheme}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
