import { useContext } from "react";
import CalculatorContext from "../../helpers/CalculatorContext";
import "./Display.css";

export default function Display() {
  const { input } = useContext(CalculatorContext);

  return (
    <input
      className="display"
      placeholder="0"
      value={input.inputDisplay}
      readOnly={true}
    />
  );
}
