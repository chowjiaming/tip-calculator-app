import { Fragment, useState, useEffect } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import Attributions from "./Attributions/Attributions";

export default function Main() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(5);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [personalTipAmount, setPersonalTipAmount] = useState(0);
  const [totalTipAmount, setTotalTipAmount] = useState(0);

  useEffect(() => {
    setTotalTipAmount(billAmount * (tipPercentage * 0.01));
    setPersonalTipAmount((billAmount * (tipPercentage * 0.01)) / numOfPeople);
  }, [billAmount, numOfPeople, tipPercentage]);

  return (
    <Fragment>
      <div className="container">
        <Title />
        <Card
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          numOfPeople={numOfPeople}
          setNumOfPeople={setNumOfPeople}
          personalTipAmount={personalTipAmount}
          setPersonalTipAmount={setPersonalTipAmount}
          totalTipAmount={totalTipAmount}
          setTotalTipAmount={setTotalTipAmount}
        />
      </div>
      <Attributions />
    </Fragment>
  );
}
