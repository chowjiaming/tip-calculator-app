import { useContext } from "react";
import TipContext from "../../context/tipContext";
import TipPercentageBoxes from "../TipPercentageBoxes/TipPercentageBoxes";
import "./InputCard.css";

export default function InputCard() {
  const { inputData, errors, handlePeopleChange, handleBillChange } =
    useContext(TipContext);

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
        {errors.bill ? (
          <span className="input__message input__message--error">
            {errors.bill}
          </span>
        ) : null}
        <img
          src="images/icon-dollar.svg"
          alt="icon-dollar"
          className={`input__icon ${
            errors.bill ? "input__icon--error" : ""
          }`}
        />
        <input
          type="text"
          className={`input__input ${
            errors.bill ? "input__input--error" : ""
          }`}
          placeholder={0}
          value={inputData.billAmount || ""}
          onChange={handleBillChange}
        />
      </div>

      <h2 className="input__header">Select Tip %</h2>
      <TipPercentageBoxes />
      <h2
        className={`input__header ${
          inputData.numPeopleError ? "input__header--error" : ""
        }`}
      >
        Number of People
      </h2>
      <div className="input__wrapper">
        {inputData.numPeopleError ? (
          <span className="input__message input__message--error">
            Too many people :))
          </span>
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
          className={`input__input ${
            inputData.numPeopleError ? "input__input--error" : ""
          }`}
          placeholder={0}
          value={inputData.numPeople || ""}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
}
