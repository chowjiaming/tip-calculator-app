import { Fragment, useContext } from "react";
import TipContext from "../../context/tipContext";
import { tipPercetageOptions } from "../../config/tipPercentageOptions";
import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import "./TipPercentageBoxes.css";

export default function TipPercentageBoxes() {
  const { inputData, handleCustomTip, errors, handleInputBlur } =
    useContext(TipContext);

  const standardOptions = tipPercetageOptions.map((percentage) => {
    return <TipPercentageBox key={percentage} percentage={percentage} />;
  });

  return (
    <Fragment>
      <h2
        className={`input__header ${errors.tip ? "input__header--error" : ""}`}
      >
        Select Tip %
      </h2>
      <div className="percentage">
        {standardOptions}
        <div className="percentage__custom">
          {errors.tip ? (
            <span className="input__message input__message--error">
              {errors.tip}
            </span>
          ) : null}
          <input
            className={`percentage__box percentage__box--custom input__input ${
              errors.tip ? "input__input--error" : ""
            }`}
            placeholder="Custom"
            value={inputData.customTipPercentage || ""}
            onChange={handleCustomTip}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </Fragment>
  );
}
