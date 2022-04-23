import { useContext } from "react";
import TipContext from "../../context/tipContext";
import { currencyFormatter } from "../../helpers/formatter";
import ResetButton from "../ResetButton/ResetButton";
import "./ResultCard.css";

const ResultCard: React.FC = () => {
  const { tipResult } = useContext(TipContext);

  return (
    <div className="result">
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Tip Amount</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(tipResult.totalTipAmount)}
        </h2>
      </div>
      <div className="result__container">
        <div className="result__container result__container--inner">
          <h2 className="result__heading">Total</h2>
          <p className="result__paragraph">/ person</p>
        </div>
        <h2 className="result__value">
          {currencyFormatter.format(tipResult.tipPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
};

export default ResultCard;
