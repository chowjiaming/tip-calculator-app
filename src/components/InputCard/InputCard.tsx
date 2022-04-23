import { useContext } from "react";
import TipContext from "../../context/tipContext";
import TipPercentageBoxes from "../TipPercentageBoxes/TipPercentageBoxes";
import { reNum, reBill, rePeople } from "../../helpers/validators";
import "./InputCard.css";

const initialErrorState = { bill: "", tip: "", people: "" };

export default function InputCard() {
  const { inputData, setInputData, errors, setErrors } = useContext(TipContext);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value && !reNum.test(e.target.value)) {
      setErrors({ ...errors, bill: "NaN :))" });
    } else if (e.target.value && !reBill.test(e.target.value)) {
      setErrors({ ...errors, bill: "Dollars don't make cents :))" });
    } else if (e.target.value && Number(e.target.value) >= 100000) {
      setErrors({ ...errors, bill: "Cannot compute :))" });
    } else {
      setInputData({ ...inputData, billAmount: e.target.value });
      setErrors({ ...errors, bill: "" });
    }
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setInputData({ ...inputData, numPeople: 0 });
    } else if (!reNum.test(e.target.value)) {
      setErrors({ ...errors, people: "NaN :))" });
    } else if (!rePeople.test(e.target.value)) {
      setErrors({ ...errors, people: "Too many people :))" });
    } else {
      setInputData({ ...inputData, numPeople: e.target.value });
      setErrors({ ...errors, people: "" });
    }
  };

  const handleInputBlur = (): void => {
    setErrors(initialErrorState);
  };

  return (
    <div className="input">
      <h2
        className={`input__header ${errors.bill ? "input__header--error" : ""}`}
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
          className={`input__icon ${errors.bill ? "input__icon--error" : ""}`}
        />
        <input
          type="text"
          className={`input__input ${errors.bill ? "input__input--error" : ""}`}
          placeholder={"0"}
          value={inputData.billAmount || ""}
          onChange={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        className={`input__header ${
          errors.people ? "input__header--error" : ""
        }`}
      >
        Number of People
      </h2>
      <div className="input__wrapper">
        {errors.people ? (
          <span className="input__message input__message--error">
            {errors.people}
          </span>
        ) : null}
        <img
          src="images/icon-person.svg"
          alt="icon-person"
          className={`input__icon ${errors.people ? "input__icon--error" : ""}`}
        />
        <input
          type="text"
          className={`input__input ${
            errors.people ? "input__input--error" : ""
          }`}
          placeholder={"0"}
          value={inputData.numPeople || ""}
          onChange={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
