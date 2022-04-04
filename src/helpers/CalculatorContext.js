import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState({
    operator: "",
    input: "",
    statement: "",
    error: "",
  });

  const resetClickHandler = () => {
    setCalculator({
      operator: "",
      input: "",
      statement: "",
      error: "",
    });
  };

  const deleteClickHandler = () => {
    setCalculator((prevState) => {
      return {
        ...prevState,
        input: "",
        statement: prevState.statement,
      };
    });
  };

  const numClickHandler = (e) => {
    const value = e.target.id;

    if (!(calculator.input.toString().length < 10)) {
      setCalculator({ ...calculator, error: "Too many digits!" });
    } else if (calculator.operator) {
      setCalculator({
        ...calculator,
        operator: "",
        input: "" + value,
        statement: calculator.statement + value,
      });
    } else {
      setCalculator({
        ...calculator,
        input: calculator.input + value,
        statement: calculator.statement + value,
      });
    }
  };

  const decimalClickHandler = (e) => {
    const value = e.target.id;
    setCalculator({
      ...calculator,
      operator: "",
      statement: !calculator.input.toString().includes(".")
        ? calculator.statement + value
        : calculator.statement,
      input: !calculator.input.toString().includes(".")
        ? calculator.input + value
        : calculator.input,
    });
  };

  const operatorClickHandler = (e) => {
    const value = e.target.id;

    if (calculator.operator) {
      setCalculator({ ...calculator });
    } else {
      setCalculator({
        ...calculator,
        operator: value,
        statement: calculator.statement + value,
      });
    }
  };

  const equalsClickHandler = () => {
    setCalculator({
      operator: "",
      input: "",
      statement: "",
      error: "",
    });
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
