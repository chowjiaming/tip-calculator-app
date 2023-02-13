import {useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import {TipCalculatorContextType} from '@/src/types';
import styles from '@/styles/ResetButton.module.css';

const ResetButton: React.FC = () => {
  const {tipCalculatorData, setTipCalculatorData} = useContext(
    TipContext
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
    <div className={styles['reset']} onClick={handleReset}>
      Reset
    </div>
  );
};

export default ResetButton;
