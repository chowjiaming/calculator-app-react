import { CalculatorProvider } from "../context/calculatorContext";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Input from "./Input/Input";

export default function Main() {
  return (
    <main>
      <Header />
      <CalculatorProvider>
        <Display />
        <Input />
      </CalculatorProvider>
    </main>
  );
}
