import { useContext } from "react";
import TipContext from "../../context/tipContext";
import { tipPercetageOptions } from "../../config/tipPercentageOptions";
import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import "./TipPercentageBoxes.css";

export default function TipPercentageBoxes() {
  const { inputData, handleCustomTip } = useContext(TipContext);
  const standardOptions = tipPercetageOptions.map((percentage) => {
    return <TipPercentageBox key={percentage} percentage={percentage} />;
  });
  return (
    <div className="percentage">
      {standardOptions}
      <div className="percentage__custom">
        {inputData.tipPercentageError ? (
          <span className="input__message input__message--error">
            Calm down :))
          </span>
        ) : null}
        <input
          className={`percentage__box percentage__box--custom input__input ${
            inputData.tipPercentageError ? "input__input--error" : ""
          }`}
          placeholder="Custom"
          value={inputData.customTipPercentage || ""}
          onChange={handleCustomTip}
        />
      </div>
    </div>
  );
}
