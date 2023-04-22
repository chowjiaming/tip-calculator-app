import {
  TipCalculatorActions,
  TipCalculatorState,
} from '@/utils/tipCalculatorTypes';

// Define the minimum and maximum limits for the bill amount, number of people, and tip percentage
enum ValidationLimits {
  BillMin = 0,
  BillMax = 1000000,
  PeopleMin = 0,
  PeopleMax = 1000,
  TipMin = 0,
  TipMax = 100,
}

// Define the initial state of the tip calculator
export const initialTipCalculatorState: TipCalculatorState = {
  billAmount: 0,
  tipPercentage: 5,
  customTipPercentage: 0,
  numberOfPeople: 0,
  billError: '',
  tipPercentageError: '',
  numberOfPeopleError: '',
  totalBillPerPerson: 0,
  tipPerPerson: 0,
};

/**
 * Calculates the tip per person and total bill per person based on the current state.
 * If the bill amount, number of people, and tip percentage are all valid, the function
 * computes the tip per person and total bill per person. Otherwise, it returns 0 for
 * both values.
 *
 * @param {TipCalculatorState} state - The current state of the tip calculator.
 * @returns {Pick<TipCalculatorState, 'tipPerPerson' | 'totalBillPerPerson'>} An object containing the calculated tip per person and total bill per person.
 */
function calculateResults(
  state: TipCalculatorState
): Pick<TipCalculatorState, 'tipPerPerson' | 'totalBillPerPerson'> {
  // Check if the bill amount, number of people, and tip percentage are all valid
  if (
    state.billAmount > 0 &&
    state.numberOfPeople > 0 &&
    state.tipPercentage >= 0
  ) {
    // Calculate the tip per person based on the bill amount and tip percentage
    const tipPerPerson = (state.billAmount * state.tipPercentage) / 100;
    // Calculate the total bill per person by dividing the bill amount by the number of people and adding the tip per person
    const totalBillPerPerson =
      state.billAmount / state.numberOfPeople + tipPerPerson;
    // Return the calculated values as an object
    return {tipPerPerson, totalBillPerPerson};
  }
  // If any of the required values are invalid, return 0 for both tip per person and total bill per person
  return {tipPerPerson: 0, totalBillPerPerson: 0};
}

/**
 * Validates a numeric input value against minimum and maximum limits.
 * If the input value is invalid, it returns an error message and the previous valid value.
 *
 * @param {number} inputValue - The input value to be validated.
 * @param {number} prevValue - The previous valid value for the input.
 * @param {number} min - The minimum allowed value for the input.
 * @param {number} max - The maximum allowed value for the input.
 * @returns {Object} An object containing the validation status, error message, and the validated value.
 *   - isValid: A boolean indicating if the input value is valid.
 *   - errorMessage: A string describing the error if the input is invalid, otherwise an empty string.
 *   - validatedValue: The validated input value if it's valid, otherwise the previous valid value.
 */
function validateInput(
  inputValue: number,
  prevValue: number,
  min: number,
  max: number
): {isValid: boolean; errorMessage: string; validatedValue: number} {
  // Initialize the error message to an empty string
  let errorMessage = '';

  // Check if the input value is a valid number
  if (isNaN(inputValue)) {
    errorMessage = 'Invalid character 🙃';
  } else if (inputValue < min) {
    // Check if the input value is below the minimum limit
    errorMessage = `Value must be greater than ${min} 🙁`;
  } else if (inputValue > max) {
    // Check if the input value is above the maximum limit
    errorMessage = `Value must be less than ${max} 😲`;
  }

  // Determine the validation status
  const isValid = !errorMessage;
  // Set the validated value to the input value if it's valid, otherwise use the previous valid value
  const validatedValue = isValid ? inputValue : prevValue;

  // Return the validation results, error message will be an empty string if the input is valid
  return {isValid, errorMessage, validatedValue};
}

/**
 * Updates the state with new values and calculates the tip and total amounts per person.
 * This function is a helper function used to reduce repetitive code in the tip calculator reducer.
 *
 * @param {TipCalculatorState} state - The current state of the tip calculator.
 * @param {Partial<TipCalculatorState>} updatedValues - An object containing the new values to update the state with.
 * @returns {TipCalculatorState} The updated state with the new values and calculated tip and total amounts per person.
 */
function updateStateAndCalculateResults(
  state: TipCalculatorState,
  updatedValues: Partial<TipCalculatorState>
): TipCalculatorState {
  // Update the state with the new values
  const newState = {...state, ...updatedValues};
  // Calculate the tip and total amounts per person
  const {tipPerPerson, totalBillPerPerson} = calculateResults(newState);
  return {...newState, tipPerPerson, totalBillPerPerson};
}

/**
 * Reducer function for the tip calculator.
 * Handles actions related to updating the bill, tip percentage, number of people, and custom tip percentage.
 * Additionally, it manages input blur and reset actions.
 *
 * @param {TipCalculatorState} state - The current state of the tip calculator.
 * @param {TipCalculatorActions} action - The action to be performed on the state.
 * @returns {TipCalculatorState} The updated state after performing the action.
 */
export function tipCalculatorReducer(
  state: TipCalculatorState,
  action: TipCalculatorActions
): TipCalculatorState {
  switch (action.type) {
    case 'UPDATE_BILL': {
      // Validate the input value for the bill amount
      const {
        isValid,
        errorMessage: billError,
        validatedValue: billAmount,
      } = validateInput(
        action.payload,
        state.billAmount,
        ValidationLimits.BillMin,
        ValidationLimits.BillMax
      );

      // If validation fails, return the state with the error message
      if (!isValid) {
        return {...state, billError};
      }

      // Update the state with the new bill amount and calculate the tip and total amounts per person
      return updateStateAndCalculateResults(state, {billAmount, billError});
    }
    case 'UPDATE_TIP': {
      // Update the state with the new tip percentage and reset the custom tip percentage
      const newState = {
        ...state,
        tipPercentage: action.payload,
        customTipPercentage: 0,
      };
      // Calculate the tip and total amounts per person
      const {tipPerPerson, totalBillPerPerson} = calculateResults(newState);
      return {...newState, tipPerPerson, totalBillPerPerson};
    }
    case 'UPDATE_PEOPLE': {
      // Validate the input value for the number of people
      const {
        isValid,
        errorMessage: numberOfPeopleError,
        validatedValue: numberOfPeople,
      } = validateInput(
        action.payload,
        state.numberOfPeople,
        ValidationLimits.PeopleMin,
        ValidationLimits.PeopleMax
      );

      // If validation fails, return the state with the error message
      if (!isValid) {
        return {...state, numberOfPeopleError};
      }

      // Update the state with the new number of people and calculate the tip and total amounts per person
      return updateStateAndCalculateResults(state, {
        numberOfPeople,
        numberOfPeopleError,
      });
    }
    case 'UPDATE_CUSTOM_TIP': {
      // Validate the input value for the custom tip percentage
      const {
        isValid,
        errorMessage: tipPercentageError,
        validatedValue: customTipPercentage,
      } = validateInput(
        action.payload,
        state.customTipPercentage,
        ValidationLimits.TipMin,
        ValidationLimits.TipMax
      );

      // If validation fails, return the state with the error message
      if (!isValid) {
        return {...state, tipPercentageError};
      }

      // Update the state with the new custom tip percentage and calculate the tip and total amounts per person
      return updateStateAndCalculateResults(state, {
        customTipPercentage,
        tipPercentageError,
      });
    }
    case 'INPUT_BLUR':
      // Clear all error messages on input blur
      return {
        ...state,
        billError: '',
        tipPercentageError: '',
        numberOfPeopleError: '',
      };
    case 'RESET':
      // Reset the state to the initial state
      return initialTipCalculatorState;
    default:
      // Return the current state for any unrecognized action
      return state;
  }
}
