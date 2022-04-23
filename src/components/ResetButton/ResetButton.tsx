import { useContext } from "react";
import TipContext from "../../context/tipContext";
import "./ResetButton.css";

const initialInputState: object = {
  billAmount: 0,
  tipPercentage: 5,
  customTipPercentage: null,
  numPeople: 0,
};

const ResetButton: React.FC = () => {
  const { setInputData } = useContext(TipContext);

  const handleReset = (): void => {
    setInputData(initialInputState);
  };

  return (
    <div className="reset" onClick={handleReset}>
      Reset
    </div>
  );
};

export default ResetButton;
