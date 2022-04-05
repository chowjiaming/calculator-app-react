import { useContext } from "react";
import CalculatorContext from "../../helpers/CalculatorContext";
import "./Display.css";

export default function Display() {
  const { calculator } = useContext(CalculatorContext);
  console.log(calculator);
  return (
    <div className="display-wrapper">
      <input
        className="display"
        placeholder="0"
        value={calculator.input || ""}
        readOnly={true}
      />
    </div>
  );
}
