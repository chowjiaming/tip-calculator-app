import type {JSX} from 'preact/jsx-runtime';
import {useTipContext} from '../../utils/tipCalculatorContext';
import {tipPercetageOptions} from '../../config/tipPercentageOptions';
import {TipPercentageBox} from './TipPercentageBox/TipPercentageBox';
import './TipPercentageBoxes.css';

export function TipPercentageBoxes(): JSX.Element {
  const {state, dispatch} = useTipContext();

  const handleCustomTip = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    dispatch({
      type: 'UPDATE_CUSTOM_TIP',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handleInputBlur = (): void => {
    dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <>
      <h2
        class={`input__header ${
          state.tipPercentageError ? 'input__header--error' : ''
        }`}
      >
        Select Tip %
      </h2>
      <div class="percentage">
        {tipPercetageOptions.map((percentage) => (
          <TipPercentageBox key={percentage} percentage={percentage} />
        ))}
        <div class="percentage__custom">
          {state.tipPercentageError ? (
            <span class="input__message input__message--error">
              {state.tipPercentageError}
            </span>
          ) : null}
          <input
            class={`percentage__box percentage__box--custom input__input ${
              state.tipPercentageError ? 'input__input--error' : ''
            }`}
            placeholder="Custom"
            value={state.customTipPercentage || ''}
            onInput={handleCustomTip}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </>
  );
}
