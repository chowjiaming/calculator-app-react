import { useContext } from "react";
import CalculatorContext from "../../../helpers/calculatorContext";
import ThemeContext from "../../../helpers/themeContext";
import { themeClass } from "../../../helpers/themeHelpers";
import "./Button.css";

export default function Button({ button }) {
  const { theme } = useContext(ThemeContext);
  const buttonClass = themeClass(theme.number);
  const { type, value } = button;
  const {
    resetClickHandler,
    deleteClickHandler,
    decimalClickHandler,
    operatorClickHandler,
    equalsClickHandler,
    numClickHandler,
  } = useContext(CalculatorContext);

  return (
    <button
      className={`button button${buttonClass} ${type}`}
      onClick={
        type === "rst"
          ? resetClickHandler
          : type === "opr"
          ? operatorClickHandler
          : type === "del"
          ? deleteClickHandler
          : type === "dec"
          ? decimalClickHandler
          : type === "eql"
          ? equalsClickHandler
          : numClickHandler
      }
    >
      {value}
    </button>
  );
}
