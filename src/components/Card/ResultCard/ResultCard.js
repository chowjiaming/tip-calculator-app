import ResetButton from "../ResetButton/ResetButton";
import "./ResultCard.css";

export default function ResultCard(props) {
  const { tipResult, setInputData } = props;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="result-card">
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h2 className="result-heading">Tip Amount</h2>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">
          {formatter.format(tipResult.totalTipAmount)}
        </h2>
      </div>
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h2 className="result-heading">Total</h2>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">
          {formatter.format(tipResult.tipPerPerson)}
        </h2>
      </div>
      <ResetButton setInputData={setInputData} />
    </div>
  );
}
