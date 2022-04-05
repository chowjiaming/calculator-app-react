import { useContext } from "react";
import ThemeContext from "../../helpers/themeContext";
import "./ThemeWrapper.css";

export default function ThemeWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="theme-wrapper" data-theme={theme.number}>
      <div className="container">{children}</div>
    </div>
  );
}
