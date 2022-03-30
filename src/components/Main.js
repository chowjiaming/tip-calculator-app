import { Fragment } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import Attributions from "./Attributions/Attributions";

export default function Main() {
  return (
    <Fragment>
      <div className="container">
        <Title />
        <Card />
      </div>
      <Attributions />
    </Fragment>
  );
}
