export interface ITipResultData {
  tipPerPerson: number;
  totalTipAmount: number;
}

export type TipResultContextType = {
  tipResultData: ITipResultData;
  setTipResultData: React.Dispatch<React.SetStateAction<ITipResultData>>;
};
