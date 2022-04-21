import "./TipPercentageBox.css"

export default function TipPercentageBox(props) {
  const { percentage, inputData, handleClick } = props;
  const isBoxActive = Number(percentage) === inputData.tipPercentage;

  return (
    <div
      className={`percentage__box ${isBoxActive ? "percentage__box--active" : ""}`}
      id={percentage}
      onClick={handleClick}
    >
      {`${percentage}%`}
    </div>
  );
}
