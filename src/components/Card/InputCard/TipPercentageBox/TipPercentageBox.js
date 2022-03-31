export default function TipPercentageBox(props) {
  const { percentage, tipPercentage, handleClick } = props;
  const isBoxActive = percentage === tipPercentage;

  return (
    <div
      className={`tip-percentage-box ${isBoxActive ? "active" : ""}`}
      id={percentage}
      onClick={handleClick}
    >
      {percentage}%
    </div>
  );
}
