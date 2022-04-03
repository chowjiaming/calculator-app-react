import { CalculatorProvider } from "../helpers/CalculatorContext";
import Attributions from "./Attributions/Attributions";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Input from "./Input/Input";

export default function Main() {
  return (
    <CalculatorProvider>
      <div className="container">
        <Header />
        <Display />
        <Input />
      </div>
      <Attributions />
    </CalculatorProvider>
  );
}
