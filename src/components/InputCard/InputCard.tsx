import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {TipContext} from '../../context/tipContext';
import {TipPercentageBoxes} from '../TipPercentageBoxes/TipPercentageBoxes';
import './InputCard.css';

export function InputCard(): JSX.Element {
  const tipContext = useContext(TipContext);
  if (!tipContext) throw new Error('Context is not defined');

  console.log('tipContext.tipCalculatorState', tipContext.tipCalculatorState);

  const handleBillChange = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    tipContext.dispatch({
      type: 'UPDATE_BILL',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handlePeopleChange = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    tipContext.dispatch({
      type: 'UPDATE_PEOPLE',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handleInputBlur = (): void => {
    tipContext.dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <div class="input">
      <h2
        class={`input__header ${
          tipContext.tipCalculatorState.billError ? 'input__header--error' : ''
        }`}
      >
        Bill
      </h2>
      <div class="input__wrapper">
        {tipContext.tipCalculatorState.billError ? (
          <span class="input__message input__message--error">
            {tipContext.tipCalculatorState.billError}
          </span>
        ) : null}
        <img
          src="/svg/icon-dollar.svg"
          alt="icon-dollar"
          class={`input__icon ${
            tipContext.tipCalculatorState.billError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          class={`input__input ${
            tipContext.tipCalculatorState.billError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorState.billAmount || ''}
          onInput={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        class={`input__header ${
          tipContext.tipCalculatorState.numberOfPeopleError
            ? 'input__header--error'
            : ''
        }`}
      >
        Number of People
      </h2>
      <div class="input__wrapper">
        {tipContext.tipCalculatorState.numberOfPeopleError ? (
          <span class="input__message input__message--error">
            {tipContext.tipCalculatorState.numberOfPeopleError}
          </span>
        ) : null}
        <img
          src="/svg/icon-person.svg"
          alt="icon-person"
          class={`input__icon ${
            tipContext.tipCalculatorState.numberOfPeopleError
              ? 'input__icon--error'
              : ''
          }`}
        />
        <input
          type="text"
          class={`input__input ${
            tipContext.tipCalculatorState.numberOfPeopleError
              ? 'input__input--error'
              : ''
          }`}
          placeholder={'0'}
          value={tipContext.tipCalculatorState.numberOfPeople || ''}
          onInput={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
