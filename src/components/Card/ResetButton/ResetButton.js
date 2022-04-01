import "./ResetButton.css";

export default function ResetButton(props) {
  const { setInputData } = props;

  const handleClick = (e) => {
    setInputData({
      billAmount: 0,
      tipPercentage: 5,
      customTipPercetage: null,
      numPeople: 0,
      numPeopleError: false,
      billAmountError: false,
    });
  };

  return (
    <div className="reset-button" onClick={handleClick}>
      Reset
    </div>
  );
}
