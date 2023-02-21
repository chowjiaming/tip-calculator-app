import type {JSX} from 'preact/jsx-runtime';
import {useMemo} from 'preact/hooks';
import {useTipContext} from '../../../utils/tipCalculatorContext';
import './TipPercentageBox.css';

type Props = {
  percentage: string;
};
export function TipPercentageBox({percentage}: Props): JSX.Element {
  const {state, dispatch} = useTipContext();

  const isBoxActive = useMemo(() => {
    return Number(percentage) === state.tipPercentage;
  }, [percentage, state.tipPercentage]);

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
