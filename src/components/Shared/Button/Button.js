import { useContext } from "react";
import CalculatorContext from "../../../helpers/CalculatorContext";
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
    <div
      className={`button ${type}`}
      id={value}
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
    </div>
  );
}
