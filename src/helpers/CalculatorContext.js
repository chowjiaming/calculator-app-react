import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    number: 1,
    ascending: true,
  });

  const handleNumberClick = (e) => {
    let value = Number(e.target.innerHTML);
    console.log("hello")
    setTheme({ number: value, ascending: true });
  };

  return (
    <CalculatorContext.Provider value={{ theme, handleNumberClick }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
