import { ThemeProvider } from "../helpers/ThemeContext";
import { CalculatorProvider } from "../helpers/CalculatorContext";
import Attributions from "./Attributions/Attributions";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Input from "./Input/Input";
import ThemeWrapper from "./ThemeWrapper/ThemeWrapper";

export default function Main() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Header />
        <CalculatorProvider>
          <Display />
          <Input />
        </CalculatorProvider>
        <Attributions />
      </ThemeWrapper>
    </ThemeProvider>
  );
}
