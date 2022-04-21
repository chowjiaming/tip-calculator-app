import { useContext } from "react";
import TipContext from "../../../context/tipContext";
import "./TipPercentageBox.css";

export default function TipPercentageBox({percentage}) {
  const { inputData, handleTipBoxClick } = useContext(TipContext);
  const isBoxActive = Number(percentage) === inputData.tipPercentage;

  return (
    <div
      className={`percentage__box ${
        isBoxActive ? "percentage__box--active" : ""
      }`}
      id={percentage}
      onClick={handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
}
