import { useContext, useEffect } from "react";
import TipContext from "../../context/tipContext";
import InputCard from "../../components/InputCard/InputCard";
import ResultCard from "../../components/ResultCard/ResultCard";
import "./TipCalculator.css";

const TipCalculator: React.FC = () => {
  const { inputData, setTipResult } = useContext(TipContext);
  useEffect(() => {
    if (inputData.numPeople) {
      setTipResult({
        totalTipAmount: inputData.billAmount * (inputData.tipPercentage * 0.01),
        tipPerPerson:
          (inputData.billAmount * (inputData.tipPercentage * 0.01)) /
          inputData.numPeople,
      });
    } else if (!inputData.billAmount) {
      setTipResult({ tipPerPerson: 0, totalTipAmount: 0 });
    }
  }, [inputData, setTipResult]);
  
  return (
    <main className="main">
      <section className="main__calculator">
        <InputCard />
        <ResultCard />
      </section>
    </main>
  );
};

export default TipCalculator;
