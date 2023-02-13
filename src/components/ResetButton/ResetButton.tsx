import {useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import styles from '@/styles/ResetButton.module.css';

const ResetButton: React.FC = () => {
  const tipContext = useContext(TipContext);

  if (!tipContext) throw new Error('TipContext is not defined');

  const handleReset = (): void => {
    tipContext.setTipCalculatorData({
      ...tipContext.tipCalculatorData,
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
