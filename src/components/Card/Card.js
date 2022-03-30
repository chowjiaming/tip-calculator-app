import InputCard from "./InputCard/InputCard";
import ResultCard from "./ResultCard/ResultCard";
import "./Card.css";

export default function Card(props) {
  const {
    billAmount,
    setBillAmount,
    tipPercentage,
    setTipPercentage,
    numOfPeople,
    setNumOfPeople,
    personalTipAmount,
    setPersonalTipAmount,
    totalTipAmount,
    setTotalTipAmount,
  } = props;

  return (
    <div className="card">
      <InputCard
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        setTipPercentage={setTipPercentage}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople}
      />
      <ResultCard
        billAmount={billAmount}
        numOfPeople={numOfPeople}
        tipPercentage={tipPercentage}
        personalTipAmount={personalTipAmount}
        setPersonalTipAmount={setPersonalTipAmount}
        totalTipAmount={totalTipAmount}
        setTotalTipAmount={setTotalTipAmount}
      />
    </div>
  );
}
