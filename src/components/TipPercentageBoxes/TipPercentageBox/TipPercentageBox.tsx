import { useContext } from "react";
import TipContext from "../../../context/tipContext";
import "./TipPercentageBox.css";

interface Props {
  percentage: string;
}

const TipPercentageBox: React.FC<Props> = ({ percentage }) => {
  const { inputData, setInputData, setErrors, errors } = useContext(TipContext);
  const isBoxActive = Number(percentage) === inputData.tipPercentage;

  const handleTipBoxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setInputData({
      ...inputData,
      tipPercentage: parseInt(e.currentTarget.title),
      customTipPercentage: null,
    });
    setErrors({ ...errors, tip: "" });
  };

  return (
    <div
      className={`percentage__box ${
        isBoxActive ? "percentage__box--active" : ""
      }`}
      id={percentage}
      title={percentage}
      onClick={handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
};

export default TipPercentageBox;
