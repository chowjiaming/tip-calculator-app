import type {JSX} from 'preact/jsx-runtime';
import {useTipContext} from '@/utils/tipCalculatorContext';
import {TipPercentageBoxes} from '@/components/TipPercentageBoxes/TipPercentageBoxes';
import '@/components/InputCard/InputCard.css';

/**
 * InputCard component displays input fields for bill amount and number of people
 * and includes the TipPercentageBoxes component for selecting the tip percentage.
 *
 * @returns {JSX.Element} The rendered InputCard component.
 */
export function InputCard(): JSX.Element {
  const {state, dispatch} = useTipContext();

  /**
   * Handles changes in bill amount and number of people input fields.
   *
   * @param {JSX.TargetedEvent<HTMLInputElement, Event>} e - The input event object.
   * @param {'UPDATE_BILL' | 'UPDATE_PEOPLE'} actionType - The action type to be dispatched.
   */
  const handleChange = (
    e: JSX.TargetedEvent<HTMLInputElement, Event>,
    actionType: 'UPDATE_BILL' | 'UPDATE_PEOPLE'
  ): void => {
    dispatch({
      type: actionType,
      payload: Number((e.target as HTMLInputElement).value),
    });
  };

  /**
   * Handles input blur by dispatching the 'INPUT_BLUR' action.
   */
  const handleInputBlur = (): void => {
    dispatch({type: 'INPUT_BLUR'});
  };

  /**
   * Renders an input field for either bill amount or number of people.
   *
   * @param {string} title - The title of the input field.
   * @param {string} iconName - The name of the icon for the input field.
   * @param {'UPDATE_BILL' | 'UPDATE_PEOPLE'} actionType - The action type to be dispatched on input change.
   * @param {number | null} stateValue - The current value of the input field from the state.
   * @param {string} stateError - The current error message from the state.
   * @returns {JSX.Element} The rendered input field component.
   */
  const renderInputField = (
    title: string,
    iconName: string,
    actionType: 'UPDATE_BILL' | 'UPDATE_PEOPLE',
    stateValue: number | null,
    stateError: string
  ): JSX.Element => (
    <>
      <h2 class={`input__header ${stateError ? 'input__header--error' : ''}`}>
        {title}
      </h2>
      <div class="input__wrapper">
        {stateError ? (
          <span class="input__message input__message--error">{stateError}</span>
        ) : null}
        <img
          src={`/svg/icon-${iconName}.svg`}
          alt={`icon-${iconName}`}
          class={`input__icon ${stateError ? 'input__icon--error' : ''}`}
        />
        <input
          type="text"
          class={`input__input ${stateError ? 'input__input--error' : ''}`}
          placeholder={'0'}
          value={stateValue || ''}
          onInput={(e) => handleChange(e, actionType)}
          onBlur={handleInputBlur}
        />
      </div>
    </>
  );

  return (
    <div class="input">
      {renderInputField(
        'Bill',
        'dollar',
        'UPDATE_BILL',
        state.billAmount,
        state.billError
      )}
      <TipPercentageBoxes />
      {renderInputField(
        'Number of People',
        'person',
        'UPDATE_PEOPLE',
        state.numberOfPeople,
        state.numberOfPeopleError
      )}
    </div>
  );
}
