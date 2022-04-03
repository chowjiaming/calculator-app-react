import { createContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [input, setInput] = useState({
    input: 0,
    inputDisplay: "",
    inputError: "",
  });

  // console.log(input);

  const handleClick = (e) => {
    const re = /^.{1,10}$/;
    console.log(re.test(input.inputDisplay));
    if (e.target.id === "=") {
      setInput((prevState) => {
        return {
          ...prevState,
          inputDisplay: 0,
        };
      });
    } else if (!re.test(input.inputDisplay) && input.inputDisplay) {
      setInput((prevState) => {
        return {
          ...prevState,
          inputError: "Too many digits",
        };
      });
    } else {
      setInput((prevState) => {
        return {
          ...prevState,
          inputDisplay: prevState.inputDisplay + e.target.id,
        };
      });
    }
  };

  return (
    <CalculatorContext.Provider value={{ input, handleClick }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
