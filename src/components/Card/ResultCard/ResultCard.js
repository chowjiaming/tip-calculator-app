import "./ResultCard.css";

export default function ResultCard() {
  return (
    <div className="result-card">
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h4 className="result-heading">Tip Amount</h4>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">$0.00</h2>
      </div>
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h4 className="result-heading">Total</h4>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">$0.00</h2>
      </div>

      <div className="reset-button">Reset</div>
    </div>
  );
}
