import { createContext, useState } from "react";
import { calculate, addCommas, removeCommas } from "./calculatorHelpers";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState({
    operator: "",
    input: 0,
    result: 0,
  });

  const resetClickHandler = () => {
    setCalculator({
      ...calculator,
      operator: "",
      input: 0,
      result: 0,
    });
  };

  const deleteClickHandler = () => {
    setCalculator({
      ...calculator,
      operator: "",
      input: 0,
    });
  };

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (removeCommas(calculator.input).length < 8) {
      setCalculator({
        ...calculator,
        input:
          calculator.input === 0 && value === "0"
            ? "0"
            : removeCommas(calculator.input) % 1 === 0
            ? addCommas(Number(removeCommas(calculator.input + value)))
            : addCommas(calculator.input + value),
        result: !calculator.operator ? 0 : calculator.result,
      });
    }
  };

  const decimalClickHandler = (e) => {
    const value = e.target.innerHTML;
    setCalculator({
      ...calculator,
      input: !calculator.input.toString().includes(".")
        ? calculator.input + value
        : calculator.input,
    });
  };

  const operatorClickHandler = (e) => {
    setCalculator({
      ...calculator,
      operator: e.target.innerHTML,
      result:
        !calculator.result && calculator.input
          ? calculator.input
          : calculator.result,
      input: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calculator.operator && calculator.input) {
      setCalculator({
        ...calculator,
        result:
          calculator.input === "0" && calculator.operator === "/"
            ? "Can't divide with 0"
            : addCommas(
                calculate(
                  Number(removeCommas(calculator.result)),
                  Number(removeCommas(calculator.input)),
                  calculator.operator
                )
              ),
        operator: "",
        input: 0,
      });
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculator,
        resetClickHandler,
        deleteClickHandler,
        decimalClickHandler,
        operatorClickHandler,
        equalsClickHandler,
        numClickHandler,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
