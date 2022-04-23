import { Fragment, useContext } from "react";
import TipContext from "../../context/tipContext";
import { tipPercetageOptions } from "../../config/tipPercentageOptions";
import TipPercentageBox from "./TipPercentageBox/TipPercentageBox";
import { reTip, reNum } from "../../helpers/validators";
import "./TipPercentageBoxes.css";

const TipPercentageBoxes: React.FC = () => {
  const { inputData, setInputData, errors, setErrors } = useContext(TipContext);

  const standardOptions: React.ReactElement[] = tipPercetageOptions.map(
    (percentage) => {
      return <TipPercentageBox key={percentage} percentage={percentage} />;
    }
  );

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setInputData({ ...inputData, tipPercentage: 5, customTipPercentage: 0 });
    } else if (!reNum.test(e.target.value)) {
      setErrors({ ...errors, tip: "NaN :))" });
    } else if (!reTip.test(e.target.value)) {
      setErrors({ ...errors, tip: "Calm down :))" });
    } else {
      setInputData({
        ...inputData,
        tipPercentage: e.target.value,
        customTipPercentage: e.target.value,
      });
      setErrors({ ...errors, tip: "" });
    }
  };

  const handleInputBlur = (): void => {
    setErrors({ bill: "", tip: "", people: "" });
  };

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
};

export default TipPercentageBoxes;
