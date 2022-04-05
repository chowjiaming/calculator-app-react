import { useContext } from "react";
import CalculatorContext from "../../helpers/calculatorContext";
import "./Display.css";

export default function Display() {
  const { calculator } = useContext(CalculatorContext);

  return (
    <div className="display-wrapper">
      <div className="display">
        {calculator.input ? calculator.input : calculator.result}
      </div>
    </div>
  );
}
