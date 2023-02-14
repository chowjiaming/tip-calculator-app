import {TipCalculatorActions, TipCalculatorState} from './tipCalculatorTypes';

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

export function tipCalculatorReducer(
  state: TipCalculatorState,
  action: TipCalculatorActions
): TipCalculatorState {
  switch (action.type) {
    case 'UPDATE_BILL': {
      if (isNaN(action.payload)) {
        return {
          ...state,
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          billError: 'Bill amount cannot be negative',
        };
      }
      if (action.payload > 1000000) {
        return {
          ...state,
          billError: 'Bill amount cannot be greater than 1,000,000',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          billAmount: action.payload,
          totalBillPerPerson: 0,
          tipPerPerson: 0,
        };
      }

      if (state.numberOfPeople > 0 && state.tipPercentage >= 0) {
        const tipPerPerson = (action.payload * state.tipPercentage) / 100;
        const totalBillPerPerson =
          action.payload / state.numberOfPeople + tipPerPerson;

        return {
          ...state,
          billAmount: action.payload,
          billError: '',
          totalBillPerPerson,
          tipPerPerson,
        };
      }

      return {...state, billAmount: action.payload, billError: ''};
    }
    case 'UPDATE_TIP': {
      if (state.billAmount >= 0 && state.numberOfPeople > 0) {
        const tipPerPerson = (state.billAmount * action.payload) / 100;
        const totalBillPerPerson =
          state.billAmount / state.numberOfPeople + tipPerPerson;

        return {
          ...state,
          tipPercentage: action.payload,
          customTipPercentage: 0,
          tipPercentageError: '',
          totalBillPerPerson,
          tipPerPerson,
        };
      }

      return {
        ...state,
        tipPercentage: action.payload,
        customTipPercentage: 0,
        tipPercentageError: '',
      };
    }
    case 'UPDATE_PEOPLE': {
      if (isNaN(action.payload)) {
        return {
          ...state,
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          numberOfPeopleError: 'Number of people cannot be negative',
        };
      }
      if (action.payload > 1000) {
        return {
          ...state,
          numberOfPeopleError: 'Number of people cannot be greater than 1000',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          numberOfPeople: action.payload,
          totalBillPerPerson: 0,
          tipPerPerson: 0,
        };
      }

      if (state.billAmount >= 0 && state.tipPercentage >= 0) {
        const tipPerPerson = (state.billAmount * state.tipPercentage) / 100;
        const totalBillPerPerson =
          state.billAmount / action.payload + tipPerPerson;

        return {
          ...state,
          numberOfPeople: action.payload,
          numberOfPeopleError: '',
          totalBillPerPerson,
          tipPerPerson,
        };
      }

      return {
        ...state,
        numberOfPeople: action.payload,
        numberOfPeopleError: '',
      };
    }
    case 'UPDATE_CUSTOM_TIP': {
      if (isNaN(action.payload)) {
        return {
          ...state,
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          tipPercentageError: 'Tip percentage cannot be negative',
        };
      }
      if (action.payload > 100) {
        return {
          ...state,
          tipPercentageError: 'Tip percentage cannot be greater than 100',
        };
      }

      if (state.billAmount >= 0 && state.numberOfPeople > 0) {
        const tipPerPerson = (state.billAmount * action.payload) / 100;
        const totalBillPerPerson =
          state.billAmount / state.numberOfPeople + tipPerPerson;

        return {
          ...state,
          tipPercentage: action.payload,
          customTipPercentage: action.payload,
          tipPercentageError: '',
          totalBillPerPerson,
          tipPerPerson,
        };
      }

      return {
        ...state,
        tipPercentage: action.payload,
        customTipPercentage: action.payload,
        tipPercentageError: '',
      };
    }
    case 'INPUT_BLUR':
      return {
        ...state,
        billError: '',
        tipPercentageError: '',
        numberOfPeopleError: '',
      };
    case 'RESET':
      return initialTipCalculatorState;
    default:
      return state;
  }
}
