import {useContext} from 'react';
import TipContext from '../../../context/tipContext';
import {TipCalculatorContextType} from '../../../@types/tipCalculatorData';
import styles from '@/styles/TipPercentageBox.module.css';

interface Props {
  percentage: string;
}

const TipPercentageBox: React.FC<Props> = ({percentage}) => {
  const {tipCalculatorData, setTipCalculatorData} = useContext(
    TipContext
  ) as TipCalculatorContextType;

  const isBoxActive = Number(percentage) === tipCalculatorData.tipPercentage;

  const handleTipBoxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setTipCalculatorData({
      ...tipCalculatorData,
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
