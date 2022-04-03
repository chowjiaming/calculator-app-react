import { useContext } from "react";
import CalculatorContext from "../../../helpers/CalculatorContext";
import "./Button.css";

export default function Button({ button }) {
  const { handleClick } = useContext(CalculatorContext);
  return (
    <div
      className={`button ${button.type}`}
      id={button.value}
      onClick={handleClick}
    >
      {button.value}
    </div>
  );
}
