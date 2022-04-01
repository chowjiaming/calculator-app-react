import "./Input.css";
import { CalculatorButtons } from "../../config/CalculatorButtons";
import Button from "../Shared/Button/Button";

const calculatorButtons = CalculatorButtons.map((button, i) => {
  return <Button button={button} key={i} />;
});

export default function Input() {
  return <div className="input-container">{calculatorButtons}</div>;
}
