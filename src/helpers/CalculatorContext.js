import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState({});

  const resetClickHandler = () => {};

  const deleteClickHandler = () => {};

  const numClickHandler = (e) => {};

  const decimalClickHandler = (e) => {};

  const operatorClickHandler = (e) => {};

  const equalsClickHandler = () => {};

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
