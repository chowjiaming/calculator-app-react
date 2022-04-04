import { useContext } from "react";
import ThemeContext from "../../helpers/ThemeContext";
import "./ThemeWrapper.css"

export default function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="theme-wrapper" data-theme={theme.number}>
      {children}
    </div>
  );
}
