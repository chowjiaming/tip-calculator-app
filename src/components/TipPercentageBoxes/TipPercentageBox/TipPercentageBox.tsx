import {useContext, useMemo} from 'react';
import {TipContext} from '@/src/context/tipContext';
import styles from '@/styles/TipPercentageBox.module.css';

type Props = {
  percentage: string;
};
export function TipPercentageBox({percentage}: Props): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const isBoxActive = useMemo(() => {
    return Number(percentage) === tipContext.tipCalculatorState.tipPercentage;
  }, [percentage, tipContext.tipCalculatorState.tipPercentage]);

  const handleTipBoxClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    tipContext.dispatch({
      type: 'UPDATE_TIP',
      payload: parseInt(e.currentTarget.title),
    });
  };

  return (
    <div
      className={`${styles['percentage__box']} ${
        isBoxActive ? styles['percentage__box--active'] : ''
      }`}
      title={`${percentage}%`}
      onClick={handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
}
