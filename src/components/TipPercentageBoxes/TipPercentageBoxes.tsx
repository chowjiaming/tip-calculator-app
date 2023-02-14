import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipContext} from '../../context/tipContext';
import {tipPercetageOptions} from '../../config/tipPercentageOptions';
import {TipPercentageBox} from './TipPercentageBox/TipPercentageBox';
import './TipPercentageBoxes.css';

export function TipPercentageBoxes(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  const handleCustomTip = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    tipContext.dispatch({
      type: 'UPDATE_CUSTOM_TIP',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handleInputBlur = (): void => {
    tipContext.dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <>
      <h2
        className={`input__header ${
          tipContext.tipCalculatorState.tipPercentageError
            ? 'input__header--error'
            : ''
        }`}
      >
        Select Tip %
      </h2>
      <div className="percentage">
        {tipPercetageOptions.map((percentage) => (
          <TipPercentageBox key={percentage} percentage={percentage} />
        ))}
        <div className="percentage__custom">
          {tipContext.tipCalculatorState.tipPercentageError ? (
            <span className="input__message input__message--error">
              {tipContext.tipCalculatorState.tipPercentageError}
            </span>
          ) : null}
          <input
            className={`percentage__box percentage__box--custom input__input ${
              tipContext.tipCalculatorState.tipPercentageError
                ? 'input__input--error'
                : ''
            }`}
            placeholder="Custom"
            value={tipContext.tipCalculatorState.customTipPercentage || ''}
            onInput={handleCustomTip}
            onBlur={handleInputBlur}
          />
        </div>
      </div>
    </>
  );
}
