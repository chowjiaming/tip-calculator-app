export function tipCalculatorReducer(
  state: TipCalculatorState,
  action: TipCalculatorActions
): TipCalculatorState {
  switch (action.type) {
    case 'UPDATE_BILL': {
      if (typeof action.payload !== 'number') {
        return {
          ...state,
          billAmount: 0,
          billError: 'Bill amount must be a number',
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          billAmount: 0,
          billError: 'Bill amount cannot be negative',
        };
      }
      if (action.payload > 1000000) {
        return {
          ...state,
          billAmount: 1000000,
          billError: 'Bill amount cannot be greater than 1,000,000',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          billAmount: 0,
          billError: 'Bill amount cannot be zero',
        };
      }

      if (state.numberOfPeople > 0) {
        const tipAmount =
          (action.payload * state.tipPercentage) / 100 / state.numberOfPeople;
        const totalAmount = action.payload / state.numberOfPeople + tipAmount;

        return {
          ...state,
          billAmount: action.payload,
          billError: '',
          tipAmount,
          totalAmount,
        };
      }

      return {...state, billAmount: action.payload, billError: ''};
    }
    case 'UPDATE_TIP': {
      if (typeof action.payload !== 'number') {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage must be a number',
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be negative',
        };
      }
      if (action.payload > 100) {
        return {
          ...state,
          tipPercentage: 100,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be greater than 100',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be zero',
        };
      }

      if (state.numberOfPeople > 0) {
        const tipAmount =
          (state.billAmount * action.payload) / 100 / state.numberOfPeople;
        const totalAmount = state.billAmount / state.numberOfPeople + tipAmount;

        return {
          ...state,
          tipPercentage: action.payload,
          customTipPercentage: 0,
          tipPercentageError: '',
          tipAmount,
          totalAmount,
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
      if (typeof action.payload !== 'number') {
        return {
          ...state,
          numberOfPeople: 0,
          numberOfPeopleError: 'Number of people must be a number',
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          numberOfPeople: 0,
          numberOfPeopleError: 'Number of people cannot be negative',
        };
      }
      if (action.payload > 100) {
        return {
          ...state,
          numberOfPeople: 100,
          numberOfPeopleError: 'Number of people cannot be greater than 100',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          numberOfPeople: 0,
          numberOfPeopleError: 'Number of people cannot be zero',
        };
      }

      if (state.billAmount > 0) {
        const tipAmount =
          (state.billAmount * state.tipPercentage) / 100 / action.payload;
        const totalAmount = state.billAmount / action.payload + tipAmount;

        return {
          ...state,
          numberOfPeople: action.payload,
          numberOfPeopleError: '',
          tipAmount,
          totalAmount,
        };
      }

      return {
        ...state,
        numberOfPeople: action.payload,
        numberOfPeopleError: '',
      };
    }
    case 'UPDATE_CUSTOM_TIP':
      if (typeof action.payload !== 'number') {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage must be a number',
        };
      }
      if (action.payload < 0) {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be negative',
        };
      }
      if (action.payload > 100) {
        return {
          ...state,
          tipPercentage: 100,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be greater than 100',
        };
      }
      if (action.payload === 0) {
        return {
          ...state,
          tipPercentage: 0,
          customTipPercentage: 0,
          tipPercentageError: 'Tip percentage cannot be zero',
        };
      }

      return {
        ...state,
        tipPercentage: action.payload,
        customTipPercentage: action.payload,
        tipPercentageError: '',
      };
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

export const initialTipCalculatorState: TipCalculatorState = {
  billAmount: 0,
  tipPercentage: 5,
  customTipPercentage: 0,
  numberOfPeople: 0,
  billError: '',
  tipPercentageError: '',
  numberOfPeopleError: '',
  tipAmount: 0,
  totalAmount: 0,
};

export type TipCalculatorActions =
  | {
      type: 'UPDATE_BILL';
      payload: number;
    }
  | {
      type: 'UPDATE_TIP';
      payload: number;
    }
  | {
      type: 'UPDATE_PEOPLE';
      payload: number;
    }
  | {
      type: 'UPDATE_CUSTOM_TIP';
      payload: number;
    }
  | {
      type: 'INPUT_BLUR';
    }
  | {
      type: 'RESET';
    };

export type TipCalculatorState = {
  billAmount: number;
  tipPercentage: number;
  customTipPercentage: number;
  numberOfPeople: number;
  billError: string;
  tipPercentageError: string;
  numberOfPeopleError: string;
  tipAmount: number;
  totalAmount: number;
};
