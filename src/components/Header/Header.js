import { useContext } from "react";
import CalculatorContext from "../../helpers/CalculatorContext";
import "./Header.css";

export default function Header() {
  const { theme, handleNumberClick } =
    useContext(CalculatorContext);
  console.log(theme);
  return (
    <header>
      <h1 className="app-name">calc</h1>
      <div className="theme-toggle-container">
        <h2 className="theme-title">THEME</h2>
        <div className="switch">
          <h2 className="theme-number" onClick={handleNumberClick}>
            1
          </h2>
          <h2 className="theme-number" onClick={handleNumberClick}>
            2
          </h2>
          <h2 className="theme-number" onClick={handleNumberClick}>
            3
          </h2>
          <div className="knob" />
        </div>
      </div>
    </header>
  );
}
