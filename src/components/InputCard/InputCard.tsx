import type {JSX} from 'preact/jsx-runtime';
import {useContext} from 'preact/hooks';
import {
  TipStateContext,
  TipDispatchContext,
} from '../../utils/tipCalculatorContext';
import {TipPercentageBoxes} from '../TipPercentageBoxes/TipPercentageBoxes';
import './InputCard.css';

export function InputCard(): JSX.Element {
  const tipCalculatorState = useContext(TipStateContext);
  const dispatch = useContext(TipDispatchContext);
  if (!tipCalculatorState) throw new Error('TipStateContext not loaded');
  if (!dispatch) throw new Error('TipDispatchContext not loaded');

  const handleBillChange = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    dispatch({
      type: 'UPDATE_BILL',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handlePeopleChange = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void => {
    dispatch({
      type: 'UPDATE_PEOPLE',
      // strange preact bug, need to cast to HTMLInputElement
      payload: Number((e.target as HTMLInputElement).value),
    });
  };
  const handleInputBlur = (): void => {
    dispatch({type: 'INPUT_BLUR'});
  };

  return (
    <div class="input">
      <h2
        class={`input__header ${
          tipCalculatorState.billError ? 'input__header--error' : ''
        }`}
      >
        Bill
      </h2>
      <div class="input__wrapper">
        {tipCalculatorState.billError ? (
          <span class="input__message input__message--error">
            {tipCalculatorState.billError}
          </span>
        ) : null}
        <img
          src="/svg/icon-dollar.svg"
          alt="icon-dollar"
          class={`input__icon ${
            tipCalculatorState.billError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          class={`input__input ${
            tipCalculatorState.billError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={tipCalculatorState.billAmount || ''}
          onInput={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        class={`input__header ${
          tipCalculatorState.numberOfPeopleError ? 'input__header--error' : ''
        }`}
      >
        Number of People
      </h2>
      <div class="input__wrapper">
        {tipCalculatorState.numberOfPeopleError ? (
          <span class="input__message input__message--error">
            {tipCalculatorState.numberOfPeopleError}
          </span>
        ) : null}
        <img
          src="/svg/icon-person.svg"
          alt="icon-person"
          class={`input__icon ${
            tipCalculatorState.numberOfPeopleError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          class={`input__input ${
            tipCalculatorState.numberOfPeopleError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={tipCalculatorState.numberOfPeople || ''}
          onInput={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
