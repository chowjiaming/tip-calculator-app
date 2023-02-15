import type {JSX} from 'preact/jsx-runtime';
import {useContext, useMemo} from 'preact/hooks';
import {
  TipStateContext,
  TipDispatchContext,
} from '../../../utils/tipCalculatorContext';
import './TipPercentageBox.css';

type Props = {
  percentage: string;
};
export function TipPercentageBox({percentage}: Props): JSX.Element {
  const tipCalculatorState = useContext(TipStateContext);
  const dispatch = useContext(TipDispatchContext);
  if (!tipCalculatorState) throw new Error('TipStateContext not loaded');
  if (!dispatch) throw new Error('TipDispatchContext not loaded');

  const isBoxActive = useMemo(() => {
    return Number(percentage) === tipCalculatorState.tipPercentage;
  }, [percentage, tipCalculatorState.tipPercentage]);

  const handleTipBoxClick = (
    e: JSX.TargetedMouseEvent<HTMLDivElement>
  ): void => {
    dispatch({
      type: 'UPDATE_TIP',
      payload: parseInt(e.currentTarget.title, 10),
    });
  };

  return (
    <div
      class={`percentage__box ${isBoxActive ? 'percentage__box--active' : ''}`}
      title={`${percentage}%`}
      onClick={handleTipBoxClick}
    >
      {`${percentage}%`}
    </div>
  );
}
