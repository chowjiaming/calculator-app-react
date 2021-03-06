import { useContext } from "react";
import CalculatorContext from "../../context/calculatorContext";
import "./Display.css";

export default function Display() {
  const { calculator } = useContext(CalculatorContext);

  return (
    <section className="display__container">
      {calculator.error ? (
        <p className="display__text--error">Error: {calculator.error}</p>
      ) : null}
      {calculator.operator ? (
        <p className="display__text--operator">Operator: {calculator.operator}</p>
      ) : null}
      <div className="display__main">
        {calculator.input ? calculator.input : calculator.result}
      </div>
    </section>
  );
}
