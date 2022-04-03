import { Fragment } from "react";
import { ThemeProvider } from "../helpers/ThemeContext";
import { CalculatorProvider } from "../helpers/CalculatorContext";
import Attributions from "./Attributions/Attributions";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Input from "./Input/Input";

export default function Main() {
  return (
    <Fragment>
      <div className="container">
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <CalculatorProvider>
          <Display />
          <Input />
        </CalculatorProvider>
      </div>
      <Attributions />
    </Fragment>
  );
}
