import InputCard from "./InputCard/InputCard";
import ResultCard from "./ResultCard/ResultCard";
import "./Card.css";

export default function Card(props) {
  const {
    inputData,
    setInputData,
    tipResult,
  } = props;

  return (
    <div className="card">
      <InputCard
        inputData={inputData}
        setInputData={setInputData}
      />
      <ResultCard
        setInputData={setInputData}
        tipResult={tipResult}
      />
    </div>
  );
}
