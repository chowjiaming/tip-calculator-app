export default function TipPercentageBox(props) {
  const { percentage, inputData, handleClick } = props;
  const isBoxActive = Number(percentage) === inputData.tipPercentage;

  return (
    <div
      className={`tip-percentage-box ${isBoxActive ? "active" : ""}`}
      id={percentage}
      onClick={handleClick}
    >
      {`${percentage}%`}
    </div>
  );
}
