import { useContext } from "react";
import button--num from "../../context/calculatorContext";
import "./Display.css";

export default function Display() {
  const { calculator } = useContext(button--num);

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
