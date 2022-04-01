import { Fragment, useState, useEffect } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import Attributions from "./Attributions/Attributions";

export default function Main() {
  const [inputData, setInputData] = useState({
    billAmount: 0,
    tipPercentage: 5,
    customTipPercentage: null,
    numPeople: 0,
    billAmountError: false,
    numPeopleError: false,
    tipPercentageError: false,
  });
  const [tipResult, setTipResult] = useState({
    tipPerPerson: 0,
    totalTipAmount: 0,
  });

  useEffect(() => {
    if (inputData.numPeople) {
      setTipResult({
        totalTipAmount: inputData.billAmount * (inputData.tipPercentage * 0.01),
        tipPerPerson:
          (inputData.billAmount * (inputData.tipPercentage * 0.01)) /
          inputData.numPeople,
      });
    } else if (!inputData.billAmount) {
      setTipResult({
        totalTipAmount: 0,
        tipPerPerson: 0,
      });
    }
  }, [inputData]);

  return (
    <Fragment>
      <div className="container">
        <Title />
        <Card
          inputData={inputData}
          setInputData={setInputData}
          tipResult={tipResult}
        />
      </div>
      <Attributions />
    </Fragment>
  );
}
