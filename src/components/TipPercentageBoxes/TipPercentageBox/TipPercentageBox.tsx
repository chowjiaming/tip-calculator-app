import {useContext} from 'react';
import TipContext from '@/src/context/tipContext';
import styles from '@/styles/TipPercentageBox.module.css';

interface Props {
  percentage: string;
}

const TipPercentageBox: React.FC<Props> = ({percentage}) => {
  const tipContext = useContext(TipContext);

  if (!tipContext) throw new Error('TipContext is not defined');

  const isBoxActive =
    Number(percentage) === tipContext.tipCalculatorState.tipPercentage;

  return (
    <div
      className={`${styles['percentage__box']} ${
        isBoxActive ? styles['percentage__box--active'] : undefined
      }`}
      id={percentage}
      title={percentage}
      onClick={tipContext.handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
};

export default TipPercentageBox;
