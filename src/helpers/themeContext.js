import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", {
    number: 1,
    ascending: true,
  });

  const handleNumberClick = (e) => {
    let value = Number(e.target.innerHTML);
    setTheme({ number: value, ascending: true });
  };

  const handleSwitchClick = (e) => {
    if (theme.ascending && theme.number < 3) {
      setTheme((prevState) => {
        return {
          ...prevState,
          number: theme.number + 1,
        };
      });
    } else if (theme.number === 3) {
      setTheme({ number: 2, ascending: false });
    } else {
      setTheme({ number: 1, ascending: true });
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, handleNumberClick, handleSwitchClick }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
