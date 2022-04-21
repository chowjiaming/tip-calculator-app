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
    <div className="input">
      <h2
        className={`input__header ${
          inputData.billAmountError ? "input__header--error" : ""
        }`}
      >
        Bill
      </h2>
      <div className="input__wrapper">
        {inputData.billAmountError ? (
          <span className="input__input--error">Cannot compute :))</span>
        ) : null}
        <img
          src="images/icon-dollar.svg"
          alt="icon-dollar"
          className={`input__icon ${
            inputData.billAmountError ? "input__icon--error" : ""
          }`}
        />
        <input
          type="text"
          className={`input__input ${inputData.billAmountError ? "error" : ""}`}
          placeholder={0}
          value={inputData.billAmount || ""}
          onChange={handleBillChange}
        />
      </div>

      <h2 className="input__header">Select Tip %</h2>
      <div className="percentage">
        {tipPercentageBoxes}
        <div className="percentage__custom">
          {inputData.tipPercentageError ? (
            <span className="input__input--error">Calm down :))</span>
          ) : null}
          <input
            className={`input__input percentage__box percentage__box--custom ${
              inputData.tipPercentageError ? "error" : ""
            }`}
            placeholder="Custom"
            value={inputData.customTipPercentage || ""}
            onChange={handleCustomTip}
          />
        </div>
      </div>

      <h2
        className={`input__header ${
          inputData.numPeopleError ? "input__header--error" : ""
        }`}
      >
        Number of People
      </h2>
      <div className="input__wrapper">
        {inputData.numPeopleError ? (
          <span className="input__input--error">Too many people :))</span>
        ) : null}
        <img
          src="images/icon-person.svg"
          alt="icon-person"
          className={`input__icon ${
            inputData.numPeopleError ? "input__icon--error" : ""
          }`}
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
