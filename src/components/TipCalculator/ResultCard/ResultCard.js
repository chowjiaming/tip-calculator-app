import { useContext } from "react";
import TipContext from "../../../context/tipContext";
import { currencyFormatter } from "../../../helpers/formatter";
import ResetButton from "../ResetButton/ResetButton";
import "./ResultCard.css";

export default function ResultCard() {
  const { tipResult } = useContext(TipContext);

  return (
    <div className="result-card">
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h2 className="result-heading">Tip Amount</h2>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">
          {currencyFormatter.format(tipResult.totalTipAmount)}
        </h2>
      </div>
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h2 className="result-heading">Total</h2>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">
          {currencyFormatter.format(tipResult.tipPerPerson)}
        </h2>
      </div>
      <ResetButton />
    </div>
  );
}
