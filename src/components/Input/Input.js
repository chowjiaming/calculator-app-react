import { useId } from "react";
import { CalculatorButtons } from "../../config/CalculatorButtons";
import Button from "../Shared/Button/Button";
import "./Input.css";

export default function Input() {
  const id = useId();
  const calculatorButtons = CalculatorButtons.map((button) => {
    return <Button button={button} key={id} />;
  });

  return <div className="input-container">{calculatorButtons}</div>;
}
