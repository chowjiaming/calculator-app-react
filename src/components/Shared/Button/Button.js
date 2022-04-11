import { useContext } from "react";
import CalculatorContext from "../../../context/calculatorContext";
import ThemeContext from "../../../context/themeContext";
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
      className={`button button-${buttonClass} ${type}`}
      type="button"
      onClick={
        type === "button--rst"
          ? resetClickHandler
          : type === "button--opr"
          ? operatorClickHandler
          : type === "button--del"
          ? deleteClickHandler
          : type === "button--dec"
          ? decimalClickHandler
          : type === "button--eql"
          ? equalsClickHandler
          : numClickHandler
      }
    >
      {value}
    </button>
  );
}
