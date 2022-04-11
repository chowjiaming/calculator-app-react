import { CalculatorButtons } from "../../config/CalculatorButtons";
import Button from "../Shared/Button/Button";
import "./Input.css";

export default function Input() {
  const calculatorButtons = CalculatorButtons.map((button) => {
    return <Button button={button} key={button.value} />;
  });

  return <section className="input__container">{calculatorButtons}</section>;
}
