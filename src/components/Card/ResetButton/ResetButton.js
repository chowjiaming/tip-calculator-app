import "./ResetButton.css";

export default function ResetButton(props) {
  const { setBillAmount, setTipPercentage, setNumOfPeople } = props;

  const handleClick = (e) => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumOfPeople(1);
  };

  return (
    <div className="reset-button" onClick={handleClick}>
      Reset
    </div>
  );
}
