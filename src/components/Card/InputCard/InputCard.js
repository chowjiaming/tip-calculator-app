import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import "./InputCard.css";

export default function InputCard(props) {
  const { inputData, setInputData } = props;
  const tipPercetageOptions = ["5", "10", "15", "20", "25"];

  const handleClick = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      tipPercentage: parseInt(e.target.id),
    }));
  };

  const handlePeopleChange = (e) => {
    const re = /^\d+$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        numPeople: 0,
      }));
    } else if (!re.test(e.target.value)) {
      e.target.value = inputData.numPeople;
    } else if (Number(e.target.value) > 100) {
      setInputData((prevState) => ({
        ...prevState,
        numPeopleError: true,
      }));
    } else {
      setInputData((prevState) => ({
        ...prevState,
        numPeople: e.target.value,
        numPeopleError: false,
      }));
    }
  };

  const handleBillChange = (e) => {
    const re = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        billAmount: 0,
      }));
    } else if (!re.test(e.target.value)) {
      e.target.value = inputData.billAmount;
    } else if (Number(e.target.value) >= 100000) {
      setInputData((prevState) => ({
        ...prevState,
        billAmountError: true,
      }));
    } else {
      setInputData((prevState) => ({
        ...prevState,
        billAmount: e.target.value,
        billAmountError: false,
      }));
    }
  };

  const handleCustomTip = (e) => {
    const re = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
    if (!e.target.value) {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentage: 0,
      }));
    } else if (!re.test(e.target.value)) {
      e.target.value = inputData.tipPercentage;
    } else {
      setInputData((prevState) => ({
        ...prevState,
        tipPercentage: e.target.value,
        customTipPercentage: e.target.value,
      }));
    }
  };

  const tipPercentageBoxes = tipPercetageOptions.map((percentage) => {
    return (
      <TipPercentageBox
        key={percentage}
        percentage={percentage}
        inputData={inputData}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="input-card">
      <h2 className={`bill ${inputData.billAmountError ? "error-filter" : ""}`}>
        Bill
      </h2>
      <div className="input-wrapper">
        {inputData.billAmountError ? (
          <span className="error-message">Cannot compute :))</span>
        ) : null}
        <img
          src="images/icon-dollar.svg"
          alt="icon-dollar"
          className={`${inputData.billAmountError ? "error-filter" : ""}`}
        />
        <input
          type="text"
          className={`bill-input ${inputData.billAmountError ? "error" : ""}`}
          placeholder={0}
          value={inputData.billAmount || ""}
          onChange={handleBillChange}
        />
      </div>

      <h2 className="select-tip">Select Tip %</h2>
      <div className="tip-selector-box">
        {tipPercentageBoxes}
        <input
          className="tip-percentage-box custom"
          placeholder="Custom"
          value={inputData.customTipPercentage || ""}
          onChange={handleCustomTip}
        />
      </div>

      <h2
        className={`people ${inputData.numPeopleError ? "error-filter" : ""}`}
      >
        Number of People
      </h2>
      <div className="input-wrapper">
        {inputData.numPeopleError ? (
          <span className="error-message">Too many people :))</span>
        ) : null}
        <img
          src="images/icon-person.svg"
          alt="icon-person"
          className={`${inputData.numPeopleError ? "error-filter" : ""}`}
        />
        <input
          type="text"
          className={`number-of-people ${
            inputData.numPeopleError ? "error" : ""
          }`}
          placeholder={0}
          value={inputData.numPeople || ""}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
}
