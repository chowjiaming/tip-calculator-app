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
  totalBillPerPerson: number;
  tipPerPerson: number;
};
