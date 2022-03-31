import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import "./InputCard.css";

export default function InputCard(props) {
  const {
    billAmount,
    setBillAmount,
    numOfPeople,
    setNumOfPeople,
    setTipPercentage,
    tipPercentage,
  } = props;

  const tipPercetageOptions = ['5', '10', '15', '20', '25'];

  const handleClick = (e) => {
    setTipPercentage(parseInt(e.target.id));
  };

  const handlePeopleChange = (e) => {
    const re = /^\d+$/;
    if (!e.target.value) {
      setNumOfPeople(0);
    } else if (!re.test(e.target.value)) {
      e.target.value = numOfPeople;
    } else {
      setNumOfPeople(e.target.value);
    }
  };

  const handleBillChange = (e) => {
    const re = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
    if (!e.target.value) {
      setBillAmount(0);
    } else if (!re.test(e.target.value)) {
      e.target.value = billAmount;
    } else {
      setBillAmount(e.target.value);
    }
  };

  const handleCustomTip = (e) => {
    const re = /^[1-9]$|^[1-9][0-9]$|^(100)$/
    if (!e.target.value) {
      setTipPercentage(0);
    } else if (!re.test(e.target.value)) {
      e.target.value = tipPercentage;
    } else {
      setTipPercentage(e.target.value);
    }
  }

  const tipPercentageBoxes = tipPercetageOptions.map((percentage) => {
    return (
      <TipPercentageBox
        key={percentage}
        percentage={percentage}
        tipPercentage={tipPercentage}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="input-card">
      <h4 className="bill">Bill</h4>
      <div className="input-wrapper">
        <img src="images/icon-dollar.svg" alt="icon-dollar" />
        <input
          type="text"
          className="bill-input"
          placeholder={0}
          value={billAmount || ""}
          onChange={handleBillChange}
        />
      </div>

      <h4 className="select-tip">Select Tip %</h4>
      <div className="tip-selector-box">
        {tipPercentageBoxes}
        <input
          className="tip-percentage-box custom"
          placeholder="Custom"
          // value={tipPercentage || ""}
          onChange={handleCustomTip}
        />
      </div>

      <h4 className="people">Number of People</h4>
      <div className="input-wrapper">
        <img src="images/icon-person.svg" alt="icon-person" />
        <input
          type="text"
          className="number-of-people"
          placeholder="1"
          value={numOfPeople || ""}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
}
