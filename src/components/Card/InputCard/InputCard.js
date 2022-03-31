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

  const tipPercetageOptions = [5, 10, 15, 20, 25];

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleClick = (e) => {
    setTipPercentage(parseInt(e.target.id));
  };

  const handlePeopleChange = (e) => {
    const re = /^\d+$/;
    if (!e.target.value) {
      setNumOfPeople(1);
    } else if (!re.test(e.target.value)) {
      e.target.value = numOfPeople;
    } else {
      setNumOfPeople(e.target.value);
    }
  };

  const handleBillChange = (e) => {
    const re = /^\d+$/;
    if (!e.target.value) {
      setBillAmount(0);
    } else if (!re.test(e.target.value)) {
      e.target.value = billAmount;
    } else {
      setBillAmount(e.target.value);
    }
  };

  let tipPercentageBoxes = tipPercetageOptions.map((percentage) => {
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
      <input
        type="text"
        className="bill-input"
        placeholder={formatter.format(0)}
        onChange={handleBillChange}
      />
      <h4 className="select-tip">Select Tip %</h4>
      <div className="tip-selector-box">
        {tipPercentageBoxes}
        <div className="tip-percentage-box custom">Custom</div>
      </div>

      <h4 className="people">Number of People</h4>
      <input
        type="text"
        className="number-of-people"
        placeholder="1"
        onChange={handlePeopleChange}
      />
    </div>
  );
}
