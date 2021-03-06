export interface ITipCalculatorData {
  billAmount: number;
  tipPercentage: number;
  customTipPercentage: number;
  numPeople: number;
  billError: string;
  tipPercentError: string;
  numPeopleError: string;
}

export type TipCalculatorContextType = {
  tipCalculatorData: ITipCalculatorData;
  setTipCalculatorData: React.Dispatch<
    React.SetStateAction<ITipCalculatorData>
  >;
  handleBillChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeopleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: () => void;
};
