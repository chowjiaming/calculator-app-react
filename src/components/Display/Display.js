import { useContext } from "react";
import CalculatorContext from "../../helpers/calculatorContext";
import "./Display.css";

export default function Display() {
  const { calculator } = useContext(CalculatorContext);

  return (
    <div className="display-wrapper">
      {calculator.error ? <p className="error">Error: {calculator.error}</p> : null}
      {calculator.operator ? (
        <p className="operator">Operator: {calculator.operator}</p>
      ) : null}
      <div className="display">
        {calculator.input ? calculator.input : calculator.result}
      </div>
    </div>
  );
}
