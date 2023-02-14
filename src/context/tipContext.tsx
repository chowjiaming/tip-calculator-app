import type {Dispatch} from 'react';
import {createContext, useReducer} from 'react';
import type {
  TipCalculatorState,
  TipCalculatorActions,
} from '@/src/utils/tipCalculatorTypes';
import {
  initialTipCalculatorState,
  tipCalculatorReducer,
} from '@/src/utils/tipCalculatorReducer';

type TipCalculatorContextType = {
  tipCalculatorState: TipCalculatorState;
  dispatch: Dispatch<TipCalculatorActions>;
};

export const TipContext = createContext<TipCalculatorContextType | null>(null);

type TipContextProviderProps = {
  children: React.ReactNode;
};
export const TipProvider = ({children}: TipContextProviderProps) => {
  const [tipCalculatorState, dispatch] = useReducer(
    tipCalculatorReducer,
    initialTipCalculatorState
  );

  return (
    <TipContext.Provider
      value={{
        tipCalculatorState,
        dispatch,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};
