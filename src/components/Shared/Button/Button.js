import { useContext } from "react";
import CalculatorContext from "../../../helpers/calculatorContext";
import "./Button.css";

export default function Button({ button }) {
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
      className={`button ${type}`}
      onClick={
        type === "rst"
          ? resetClickHandler
          : type === "opr"
          ? operatorClickHandler
          : type === "del"
          ? deleteClickHandler
          : type === 'dec'
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
