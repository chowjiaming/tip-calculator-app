import { useContext } from 'react';
import TipContext from '../../context/tipContext';
import { TipCalculatorContextType } from '../../@types/tipCalculatorData';
import './ResetButton.css';

const ResetButton: React.FC = () => {
  const { tipCalculatorData, setTipCalculatorData } = useContext(
    TipContext,
  ) as TipCalculatorContextType;

  const handleReset = (): void => {
    setTipCalculatorData({
      ...tipCalculatorData,
      billAmount: 0,
      tipPercentage: 5,
      customTipPercentage: 0,
      numPeople: 0,
    });
  };

  return (
    <div className="reset" onClick={handleReset}>
      Reset
    </div>
  );
};

export default ResetButton;
