import type {JSX} from 'preact/jsx-runtime';
import {useContext, useMemo} from 'preact/hooks';
import {TipContext} from '../../../context/tipContext';
import './TipPercentageBox.css';

type Props = {
  percentage: string;
};
export function TipPercentageBox({percentage}: Props): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const isBoxActive = useMemo(() => {
    return Number(percentage) === tipContext.tipCalculatorState.tipPercentage;
  }, [percentage, tipContext.tipCalculatorState.tipPercentage]);

  const handleTipBoxClick = (
    e: JSX.TargetedMouseEvent<HTMLDivElement>
  ): void => {
    tipContext.dispatch({
      type: 'UPDATE_TIP',
      payload: parseInt(e.currentTarget.title),
    });
  };

  return (
    <div
      className={`percentage__box ${
        isBoxActive ? 'percentage__box--active' : ''
      }`}
      title={`${percentage}%`}
      onClick={handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
}
