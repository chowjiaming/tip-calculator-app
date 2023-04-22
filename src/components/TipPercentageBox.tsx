import type {JSX} from 'preact/jsx-runtime';
import {useMemo} from 'preact/hooks';
import {useTipContext} from '@/utils/tipCalculatorContext';

type Props = {
  percentage: string;
};

export function TipPercentageBox({percentage}: Props): JSX.Element {
  // Get the tip calculator state and dispatch function from the context
  const {state, dispatch} = useTipContext();

  // Determine whether or not the box should be active based on the percentage and the current tip percentage in the state
  const isBoxActive = useMemo(() => {
    return Number(percentage) === state.tipPercentage;
  }, [percentage, state.tipPercentage]);

  // Handle the click event on the tip percentage box
  const handleTipBoxClick = (
    e: JSX.TargetedMouseEvent<HTMLDivElement>
  ): void => {
    // Update the tip percentage in the state
    dispatch({
      type: 'UPDATE_TIP',
      payload: parseInt(e.currentTarget.title, 10),
    });
  };

  // Return the tip percentage box as a div element
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
