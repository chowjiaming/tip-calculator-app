import "./InputCard.css";

export default function InputCard() {
  return (
    <div className="input-card">
      <h4 className="bill">Bill</h4>
      <input type="text" className="bill-input" />
      <h4 className="select-tip">Select Tip %</h4>
      <div className="tip-selector-box">
        <div className="tip-percentage-box">5%</div>
        <div className="tip-percentage-box">10%</div>
        <div className="tip-percentage-box">15%</div>
        <div className="tip-percentage-box">25%</div>
        <div className="tip-percentage-box">50%</div>
        <div className="tip-percentage-box custom">Custom</div>
      </div>

      <h4 className="people">Number of People</h4>
      <input type="text" className="number-of-people" />
    </div>
  );
}
