import { createContext, useState } from "react";
import { calculate, addCommas, removeCommas } from "../helpers/calculatorHelpers";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState({
    operator: "",
    input: 0,
    result: 0,
    error: "",
  });

  const resetClickHandler = () => {
    setCalculator({
      operator: "",
      input: 0,
      result: 0,
      error: "",
    });
  };

  const deleteClickHandler = () => {
    setCalculator({
      ...calculator,
      operator: "",
      input: 0,
      error: "",
    });
  };

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (removeCommas(calculator.input).length <= 10) {
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
    } else {
      setCalculator({
        ...calculator,
        error: "Too many digits",
      });
    }
  };

  const decimalClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (!calculator.input.toString().includes(".")) {
      setCalculator({
        ...calculator,
        input: calculator.input + value,
      });
    } else {
      setCalculator({
        ...calculator,
        error: "Only one decimal possible",
      });
    }
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
      error: "",
    });
  };

  const equalsClickHandler = () => {
    if (calculator.operator && calculator.input) {
      setCalculator({
        ...calculator,
        result:
          calculator.input === "0" && calculator.operator === "/"
            ? "-E-"
            : addCommas(
                calculate(
                  Number(removeCommas(calculator.result)),
                  Number(removeCommas(calculator.input)),
                  calculator.operator
                )
              ),
        operator: "",
        input: 0,
        error:
          calculator.input === "0" && calculator.operator === "/"
            ? "Cannot divide by zero"
            : "",
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
