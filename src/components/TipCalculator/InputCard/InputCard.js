import { useContext } from "react";
import TipContext from "../../../context/tipContext";
import { tipPercetageOptions } from "../../../config/tipPercentageOptions";
import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import "./InputCard.css";

export default function InputCard() {
  const {
    inputData,
    handleTipBoxClick,
    handlePeopleChange,
    handleBillChange,
    handleCustomTip,
  } = useContext(TipContext);

  const tipPercentageBoxes = tipPercetageOptions.map((percentage) => {
    return (
      <TipPercentageBox
        key={percentage}
        percentage={percentage}
        inputData={inputData}
        handleClick={handleTipBoxClick}
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
          className={`input__input ${inputData.billAmountError ? "error" : ""}`}
          placeholder={0}
          value={inputData.billAmount || ""}
          onChange={handleBillChange}
        />
      </div>

      <h2 className="select-tip">Select Tip %</h2>
      <div className="tip-selector-box">
        {tipPercentageBoxes}
        <div className="tip-input-wrapper">
          {inputData.tipPercentageError ? (
            <span className="error-message">Calm down :))</span>
          ) : null}
          <input
            className={`tip-percentage-box input__input custom ${
              inputData.tipPercentageError ? "error" : ""
            }`}
            placeholder="Custom"
            value={inputData.customTipPercentage || ""}
            onChange={handleCustomTip}
          />
        </div>
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
          className={`input__input ${inputData.numPeopleError ? "error" : ""}`}
          placeholder={0}
          value={inputData.numPeople || ""}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
}
