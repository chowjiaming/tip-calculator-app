import "./ResultCard.css";

export default function ResultCard(props) {
  const { personalTipAmount, totalTipAmount } = props;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="result-card">
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h4 className="result-heading">Tip Amount</h4>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">{formatter.format(totalTipAmount)}</h2>
      </div>
      <div className="tip-result-box">
        <div className="tip-text-box">
          <h4 className="result-heading">Total</h4>
          <p className="per-person">/ person</p>
        </div>
        <h2 className="tip-result">{formatter.format(personalTipAmount)}</h2>
      </div>

      <div className="reset-button">Reset</div>
    </div>
  );
}
