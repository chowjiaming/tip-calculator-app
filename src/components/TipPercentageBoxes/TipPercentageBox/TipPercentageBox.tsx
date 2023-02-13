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
    Number(percentage) === tipContext.tipCalculatorData.tipPercentage;

  const handleTipBoxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    tipContext.setTipCalculatorData({
      ...tipContext.tipCalculatorData,
      tipPercentage: parseInt(e.currentTarget.title),
      customTipPercentage: 0,
      tipPercentError: '',
    });
  };

  return (
    <div
      className={`${styles['percentage__box']} ${
        isBoxActive ? styles['percentage__box--active'] : undefined
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
