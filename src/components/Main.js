import { Fragment, useState, useEffect } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import Attributions from "./Attributions/Attributions";

export default function Main() {
  const [inputData, setInputData] = useState({
    billAmount: 0,
    tipPercentage: 5,
    numOfPeople: 0,
  });
  const [tipResult, setTipResult] = useState({
    personalTipAmount: 0,
    totalTipAmount: 0,
  })

  useEffect(() => {
    if (inputData.numOfPeople) {
      setTipResult({
        totalTipAmount: inputData.billAmount * (inputData.tipPercentage * 0.01),
        personalTipAmount: (inputData.billAmount * (inputData.tipPercentage * 0.01)) / inputData.numOfPeople
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
