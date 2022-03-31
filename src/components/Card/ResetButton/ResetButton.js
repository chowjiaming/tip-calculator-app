import "./ResetButton.css";

export default function ResetButton(props) {
  const { setInputData } = props;

  const handleClick = (e) => {
    setInputData({
      billAmount: 0,
      tipPercentage: 5,
      numOfPeople: 0
    });
  };

  return (
    <div className="reset-button" onClick={handleClick}>
      Reset
    </div>
  );
}
