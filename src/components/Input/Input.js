import "./Input.css";
import { CalculatorButtons } from "../../config/CalculatorButtons";
import Button from "../Shared/Button/Button";

const calculatorButtons = CalculatorButtons.map((button) => {
  return <Button button={button} key={button.value} />;
});

export default function Input() {
  return <div className="input-container">{calculatorButtons}</div>;
}
