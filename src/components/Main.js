import { Fragment } from "react";
import Attributions from "./Attributions/Attributions";
import Header from "./Header/Header";
import Display from "./Display/Display";

export default function Main() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <Display />
      </div>
      <Attributions />
    </Fragment>
  );
}
