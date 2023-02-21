import type {JSX} from 'preact/jsx-runtime';
import {useTipContext} from '../../utils/tipCalculatorContext';
import {TipPercentageBoxes} from '../TipPercentageBoxes/TipPercentageBoxes';
import './InputCard.css';

export function InputCard(): JSX.Element {
  const {state, dispatch} = useTipContext();

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
        class={`input__header ${state.billError ? 'input__header--error' : ''}`}
      >
        Bill
      </h2>
      <div class="input__wrapper">
        {state.billError ? (
          <span class="input__message input__message--error">
            {state.billError}
          </span>
        ) : null}
        <img
          src="/svg/icon-dollar.svg"
          alt="icon-dollar"
          class={`input__icon ${state.billError ? 'input__icon--error' : ''}`}
        />
        <input
          type="text"
          class={`input__input ${state.billError ? 'input__input--error' : ''}`}
          placeholder={'0'}
          value={state.billAmount || ''}
          onInput={handleBillChange}
          onBlur={handleInputBlur}
        />
      </div>
      <TipPercentageBoxes />
      <h2
        class={`input__header ${
          state.numberOfPeopleError ? 'input__header--error' : ''
        }`}
      >
        Number of People
      </h2>
      <div class="input__wrapper">
        {state.numberOfPeopleError ? (
          <span class="input__message input__message--error">
            {state.numberOfPeopleError}
          </span>
        ) : null}
        <img
          src="/svg/icon-person.svg"
          alt="icon-person"
          class={`input__icon ${
            state.numberOfPeopleError ? 'input__icon--error' : ''
          }`}
        />
        <input
          type="text"
          class={`input__input ${
            state.numberOfPeopleError ? 'input__input--error' : ''
          }`}
          placeholder={'0'}
          value={state.numberOfPeople || ''}
          onInput={handlePeopleChange}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
}
